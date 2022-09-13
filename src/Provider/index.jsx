import AuthProvider from "./Auth"
import UsersProvider from "./User"

export const Provider = ({ children }) => {
    return (
        <UsersProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </UsersProvider>
    )
}
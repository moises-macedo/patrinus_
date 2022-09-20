import { availableItems } from "./item"

export const CoursesAvailable = () =>{
    return(
        <div>
            {availableItems.map(({escola, modalidade,image,cursos},index)=>{
                return(
                    <ul key={index}>
                        <li>{escola}</li>
                        <li>{modalidade}</li>
                        <li>
                        {cursos.map(({nome,descricao},index)=>{
                            return(
                                <p key={index}>{nome}</p>
                            )
                        })}
                        </li>

                    </ul>
                )
            })}
        </div>
    )
}
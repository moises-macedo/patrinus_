import { useContext } from "react";
import { UsersContext } from "../../Provider/User";
import { SponsoredByStyle } from "./style";
export const SponsoredBy = () => {
  const { user } = useContext(UsersContext);
  return (
    <>
      {user?.godfather && (
        <SponsoredByStyle>
          <h3>Apadrinhado por: Jorge</h3>
        </SponsoredByStyle>
      )}
    </>
  );
};

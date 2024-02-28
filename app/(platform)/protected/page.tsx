

import {useAuth, useUser, UserButton} from "@clerk/nextjs";

const ProtectedPage = () =>{

    // const {user} = useUser();
    // const {userId} = useAuth();
    return(
        <div>
            {/* Protected page! User : {user?.firstName}
            UserId: {userId} */}
            <UserButton
               
            />
        </div>
    )
}

export default ProtectedPage;
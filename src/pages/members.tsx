import {Box} from '@mui/material';
import { members} from '../data/members_list_data';
const Members=()=>{
    return(
        <>
        <Box>
            <h2>Members List</h2>
            <ul>
                {members.map((member)=>(
                    <li key={member.name}>
                        <h2>{member.name}</h2>
                        <img src={member.imageURL?.toString()}></img>
                        <b/>
                        <p key={member.name}>{member.profile}</p>
                        <ul>
                            {member.Links?.map((link)=>(
                                <li key={link.URLname}>
                                    <a href={link.URL.toString()}>
                                        {link.URLname}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <h3>
                            {member.contact}
                        </h3>
                        <p>
                            {member.discription}
                        </p>
                    </li>
                ))}
            </ul>
        </Box>
        </>
    )
}
export default Members;
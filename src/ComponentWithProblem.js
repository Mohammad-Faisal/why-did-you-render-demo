import React, {useState} from 'react';


const updatedUser = {
    name:'faisal'
}

const ComponentWithProblem = () => {

    console.log('rendered ');
    const [user , setUser ] = useState(updatedUser);

    const updateUser = () => {
        setUser(updatedUser)
    }

    return <div>
        <duv> User name is : {user.name}</duv>
        <button onClick={updateUser}> Update< /button>
    </div>
}

ComponentWithProblem.whyDidYouRender= true;

export default ComponentWithProblem;
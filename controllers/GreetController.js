function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function wishGreetingToUser(user){
    const GreetMessage = [];
    if(user.length > 1) {
        for (let i = 0; i < user.length; i++) {
            honoree = capitalizeFirstLetter(user[i]);
            GreetMessage[i] = `Happy birthday to you Happy birthday to you  Happy birthday, Dear  ${honoree}  Happy birthday to you`
        }
        return GreetMessage;
    }else {
        return `Happy birthday to you Happy birthday to you  Happy birthday, Dear  ${user}  Happy birthday to you`
}
}

const greetByName = (req, res)=>{
    honoree = capitalizeFirstLetter(req.params.username);
    res.status(200).json({ 
        statusCode : 200, 
        message : {
            content: { type: 'text', text: `Happy birthday to you Happy birthday to you  Happy birthday, Dear  ${honoree}  Happy birthday to you` }
        }
    })
}

const addUserList =  (req, res)=>{
    data = req.body.userList;

    greetMessage = wishGreetingToUser(data)
    res.status(200).json({ 
        statusCode: 200, 
        message: greetMessage 
    })
}

module.exports = {
    greetByName,
    addUserList
}
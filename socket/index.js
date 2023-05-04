const URL = process.env.FE_URL || "http://localhost:3000"
//https://keen-blini-898fcb.netlify.app
const PORT = process.env.PORT || 8900

const io = require('socket.io')(PORT, {
    cors:{
        origin: URL,
    },
})

let users = [];

const adduser = (userId , socketId) => {
    !users.some((user) => user.userId === userId) &&
    users.push({userId , socketId})
}

const removeuser = (socketId) => {
    users = users.filter(user=> user.socketId !== socketId)
}

const getuser = (userId) => {
    return users.find(user => user.userId === userId)
}

//user connected
io.on("connection",(socket) => {
    //when connect
    console.log("a user connected")
    //take userId and socketId from user
    socket.on("adduser",(userId) => {
        adduser(userId , socket.id)
        io.emit("getusers",users)
    })

    //send and get messages
socket.on("sendmessage",({senderId , receiverId , text}) => {
    const user = getuser(receiverId);
    io.to(user?.socketId).emit("getmessage",{
        senderId,
        text,
    })
}) 

    //when disconnect
    socket.on("disconnect",() => {
        console.log("a user disconnected");
        removeuser(socket.id);
        io.emit("getusers",users)
    })
})

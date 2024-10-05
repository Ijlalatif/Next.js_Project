const {username,password}=process.env;
export const connectionStr="mongodb+srv://"+username+":"+password+"@user.vrx6n.mongodb.net/user?retryWrites=true&w=majority&appName=user"
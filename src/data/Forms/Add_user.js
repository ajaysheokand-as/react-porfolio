export default [
    {
        name: "userName",
        lable: "Full Name",
        type:"text",
        condition:{
            required: "Name is Required"
        }

    },
    {
        name: "mobileNumber",
        lable: "Mobile Number",
        type:"number",
        condition:{
            required: "Mobile Number is Required"
        }

    },
    {
        name: "email",
        lable: "Email",
        type:"email",
        condition:{
            required: false
        }
    },
    {
        name: "password",
        lable: "Password",
        type:"password",
        condition:{
            required: "Password is Required"
        }
    },
    {
        name: "match_password",
        lable: "Re-Enter Password",
        type:"password",
        condition:{
            required: "Password is Required"
        }
    },
    {
        name: "address",
        lable: "Address",
        type:"text-area",
        condition:{
            required: false
        }
    },
]
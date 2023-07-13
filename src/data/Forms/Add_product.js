export default [
    {
        name: "brand",
        lable: "Brand and Model Name ",
        type:"text",
        condition:{
            required: "Name is Required"
        }

    },
    {
        name: "ram",
        lable: "RAM",
        type:"number",
        condition:{
            required: "RAM is Required"
        }

    },
    {
        name: "ssd",
        lable: "SSD",
        type:"text",
        condition:{
            required: false
        }
    },
    {
        name: "hdd",
        lable: "HDD",
        type:"number",
        condition:{
            required: false
        }
    },
    {
        name: "processor",
        lable: "Processor",
        type:"text",
        condition:{
            required: false
        }
    },
    {
        name: "generation",
        lable: "Generation",
        type:"number",
        condition:{
            required: false
        }
    },
    {
        name: "price",
        lable: "Price",
        type:"number",
        condition:{
            required: "Price is required"
        }
    },
    {
        name: "discount",
        lable: "Discount",
        type:"number",
        condition:{
            required: false
        }
    },
    {
        name: "description",
        lable: "Description",
        type:"text-area",
        condition:{
            required: false
        }
    },
]
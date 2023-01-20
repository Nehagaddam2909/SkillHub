import {Card,CardBody, Avatar,CardHeader, CardFooter, Typography,  IconButton, TabsHeader, Menu, MenuHandler, MenuList, MenuItem, Tab, Switch, Tooltip, Button, Progress} from "@material-tailwind/react";
import {ClockIcon,PencilIcon, CheckIcon, EllipsisVerticalIcon, ArrowUpIcon,} from "@heroicons/react/24/outline";

const Info=({data,handleClick,state})=>{

return(
    // <Card className="mx-2 mb-6 lg:mx-4 w-auto md:w-[20rem]">
      
    //     <CardBody className="p-4">
        
    //       <div className="flex flex-col">
            
    //       <div className="flex flex-col items-center rounded-lg text-black justify-center mb-3">
    //           <div className="flex">
    //            
    //             <div className="justify-end">
    //               
    //         </div>
    //           </div>
    //             <Typography variant="h6 " >
    //               {data && data["FirstName"] } {data && data["LastName"] }


    //           </Typography>
    //           
    //           {/* <div className="flex justify-evenly w-full">
    //           <Button variant="gradient" color="white" href="mailto:">Bussines Card</Button>
            

    //          <Button variant="gradient" color="white" onClick={() => window.location = `mailto:${data["email"]}`}>
    //          Email</Button>
    //           </div> */}
    //             </div>
             
    //       </div>
       
    //       <div className="mb-10 flex items-center justify-center gap-6">
            
    //         <div className="flex items-center gap-6">
             
    //           <div className=" overflow-hidden">
             
    //            <div>
    //             <Typography variant="h6" className="justify-center">About</Typography>
    //             <label className="text-[.85rem]">{data && (data["about"] || "Some random text goes here")}</label>
    //             <Typography
    //               variant="small"
    //               className="mt-3 text-[.9rem] font-bold"
    //             >
    //               Demographics:
    //             </Typography>

    //             <div className="flex flex-col">
    //        
    //     </div>
    //           </div>
    //         </div>
    //         </div>+
    //       </div>
          
          
    //     </CardBody>
    //   </Card>
    <Card className="flex flex-col mx-2 mb-6 lg:mx-4 w-auto md:w-[22rem] shadow-xl">
       
       <div>
       <PencilIcon className="mr-2 my-3 float-right h-4 w-4 cursor-pointer text-black" />
      
        <div className=" bg-teal-100 m-2 rounded-2xl">

       <div className="flex justify-center bg-teal-100 mx-2">

       <Avatar
            src="/img/images.png"
            alt="bruce-mars"
            size="xxl"
            className=" my-3 rounded-full shadow-lg shadow-blue-gray-500/40"
                />
       
       
        
        </div>
        
        <div className="flex flex-col items-center justify-center pb-2">
        <Typography varient="h4" className="font-bold text-justify">
            {data && data.FirstName} {data && data.LastName}
          </Typography>


          <Typography variant="paragraph" >
                    {data && data["Position"] } | {data && data["Department"] }


          </Typography>
                
       </div>
       </div>
       </div>
      <div className="flex flex-col border-black justify-center p-4">
      <div className="w-full  flex px-4 justify-between">
             <label className="text-[1rem] font-serif text-black mt-2">First Name</label>
               <label className="text-[1rem] font-serif text-black mt-2 capitalize">{data && data["FirstName"]}</label>

           </div>
           <div className="flex px-4 justify-between">
               <label className="text-[1rem] font-serif text-black mt-2 capitalize">Last Name</label>
               <label className="text-[1rem] font-serif text-black mt-2 capitalize" >{data && data["LastName"]}</label>

           </div>
           <div className="flex px-4 justify-between">
               <label className="text-[1rem] font-serif text-black mt-2 capitalize">Department</label>
               <label className="text-[1rem] font-serif text-black mt-2 capitalize">{data && data["Department"]}</label>

           </div>
           <div className="flex px-4 justify-between">
               <label className="text-[1rem] font-serif text-black mt-2 capitalize">Position</label>
               <label className="text-[1rem] font-serif text-black mt-2 capitalize">{data && data["Position"]}</label>

           </div>
           <div className="flex px-4 justify-between">
               <label className="text-[1rem] font-serif text-black mt-2 capitalize">Location</label>
               <label className="text-[1rem] font-serif text-black mt-2 capitalize">{data && data["Location"]}</label>

           </div>
           <div className="flex px-4 justify-between">
               <label className="text-[1rem] font-serif text-black mt-2 capitalize">Gender</label>
               <label className="text-[1rem] font-serif text-black mt-2 capitalize">{data && data["Gender"]}</label>

           </div>
           <div className="flex px-4 justify-between">
               <label className="text-[1rem] font-serif text-black mt-2 capitalize">Joining dat</label>
               <label className="text-[1rem] font-serif text-black mt-2 capitalize">{data && data.JoinDate }</label>

           </div>

      </div>
    </Card>
)
}

export default Info;
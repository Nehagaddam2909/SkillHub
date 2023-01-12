import {Card, CardBody, CardHeader, CardFooter, Typography,  IconButton, TabsHeader, Menu, MenuHandler, MenuList, MenuItem, Tab, Switch, Tooltip, Button, Progress} from "@material-tailwind/react";
import {ClockIcon, CheckIcon, EllipsisVerticalIcon, ArrowUpIcon,} from "@heroicons/react/24/outline";

const Info=({data,handleClick,state})=>{

return(
    <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
      
        <CardBody className="p-4">
        {!state && <Menu placement="left-start">
              <MenuHandler className="float-right">
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6 capitalize"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                

                <MenuItem><button onClick={e=>handleClick(e)}>Edit</button></MenuItem>
              </MenuList>
            </Menu>}
        
          <div className="mb-10 flex items-center justify-center gap-6">
            
            <div className="flex items-center gap-6">
             
              <div className="w-[18rem]">
                <div className="flex flex-col h-[8rem] bg-gray-100 items-center rounded-lg text-black justify-center mb-3">
                <Typography variant="h6" >
                  {data && data["FirstName"] } {data && data["LastName"] }


              </Typography>
              <Typography variant="paragraph" >
                  {data && data["Position"] } | {data && data["Department"] }


              </Typography>
                
              <div className="flex justify-evenly w-full">
              <Button variant="gradient" color="white" href="mailto:">Bussines Card</Button>
              
             <Button variant="gradient" color="white">
             Email</Button>
              </div>
                </div>
               
                <Typography variant="h6" className="justify-center">About</Typography>
                <Typography variant="small" className="text-[.85rem]">{data && (data["about"] || "Some random text goes here")}</Typography>
                <Typography
                  variant="small"
                  className="mt-3 text-[.9rem] font-bold"
                >
                  Demographics:
                </Typography>

                <div className="flex flex-col">
            <div className="w-full  flex space-x-5 justify-between">
              <Typography variant="small" className="text-xs  mt-2">First Name</Typography>
              <Typography variant="small" className="text-xs  mt-2 capitalize">{data && data["FirstName"]}</Typography>

          </div>
          <div className="flex space-x-5 justify-between">
              <Typography variant="small" className="text-xs  mt-2 capitalize">Last Name</Typography>
              <Typography variant="small" className="text-xs  mt-2 capitalize" >{data && data["LastName"]}</Typography>

          </div>
          <div className="flex space-x-5 justify-between">
              <Typography variant="small" className="text-xs  mt-2 capitalize">Department</Typography>
              <Typography variant="small" className="text-xs  mt-2 capitalize">{data && data["Department"]}</Typography>

          </div>
          <div className="flex space-x-5 justify-between">
              <Typography variant="small" className="text-xs  mt-2 capitalize">Position</Typography>
              <Typography variant="small" className="text-xs  mt-2 capitalize">{data && data["Position"]}</Typography>

          </div>
          <div className="flex space-x-5 justify-between">
              <Typography variant="small" className="text-xs  mt-2 capitalize">Location</Typography>
              <Typography variant="small" className="text-xs  mt-2 capitalize">{data && data["Location"]}</Typography>

          </div>
          <div className="flex space-x-5 justify-between">
              <Typography variant="small" className="text-xs  mt-2 capitalize">Gender</Typography>
              <Typography variant="small" className="text-xs  mt-2 capitalize">{data && data["Gender"]}</Typography>

          </div>
          <div className="flex space-x-5 justify-between">
              <Typography variant="small" className="text-xs  mt-2 capitalize">Joining dat</Typography>
              <Typography variant="small" className="text-xs  mt-2 capitalize">{data && data.JoinDate }</Typography>

          </div>

        </div>
              </div>
            </div>
           
          </div>
          
          
        </CardBody>
      </Card>
)
}

export default Info;
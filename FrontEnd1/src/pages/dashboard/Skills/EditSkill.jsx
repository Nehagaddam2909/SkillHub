const EditSkill=({token,setskill_to_edit,skill_to_edit,changeModalName,handleEditSkill,
  chunks,setchunks,changeColor,changeOverlay,changAlert,toggleOverlay})=>{
    return(
        <div className= "bg-white z-10 absolute top-[10rem] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl px-8 py-5 space-y-5">
            <div className="text-xl border-b-2 border-gray-700 pb-2 mb-3 ">Edit Skill Name</div>
              ID:   <input type="text" value={skill_to_edit.skill_id} disabled />
               <p>Name :</p> <input className="border-b-2 outline-none" type="text" value={skill_to_edit.skill_name} onChange={
                  e=>{
                    setskill_to_edit(prev=>({...prev,skill_name:e.target.value}))
                  }
               } />
            <div className="flex justify-end gap-2">
                <button onClick={e=>{
              
                  changeModalName("Update")
                }}  color="red" className="text-lg text-white bg-red-500 rounded px-3 py-1 font-normal capitalize"  >Cancel</button>
                <button  className="text-lg text-white bg-green-500 rounded px-3 py-1  font-normal capitalize" 
                onClick={e=>handleEditSkill(token,skill_to_edit,chunks,setchunks,changeColor,changeOverlay,changAlert,toggleOverlay)}
                >Update</button>
              </div>
          <hr />
          </div>
    );
}
export default EditSkill;
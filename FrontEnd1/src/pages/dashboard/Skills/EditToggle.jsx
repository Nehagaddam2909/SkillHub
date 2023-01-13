const EditToggle=({ele,idx,name,Object,data,setskill_to_edit,changeModalName,HandleDeleteSkill})=>{
    return( 
    <div key={idx} className="flex w-screen max-w-xs  justify-between items-center space-x-12">
    <div className="flex items-center gap-2">
      <label className="opacity-75" htmlFor="">{name}</label>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-blue-500 cursor-pointer" onClick={e=>{
        // setskill_to_edit(ele)
        let n;
        Object.values(data).map(d=>{
          d.forEach(e=>{
            if(e._id==ele.skill_id){
              n = e.skill_name
            }
          })
        })
        setskill_to_edit({skill_id:ele.skill_id,skill_name:n})
        changeModalName("Edit")
      }}>Edit</span>
      <span onClick={e=>HandleDeleteSkill(ele.skill_id)} className="text-red-500 cursor-pointer">Delete</span>
    </div>
</div>)
}
export default EditToggle;
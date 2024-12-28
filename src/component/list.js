import { deletedoc } from "./useFireStore"

export function List({scrollToForm,detail})
{
    
    async function handleEdit(){

        scrollToForm(detail)
    }

    function handleDelete()
    {
        let userResponse = window.confirm("Do you want to Delete?")
        if(userResponse)
        {
            deletedoc(detail.id)
        }
    }

    return <div className="container justify-items-center mx-auto">
            <div className="mt-5 bg-gray-200 p-4 rounded-3xl flex flex-col gap-3">
            <h3>Name: <span>{detail.name}</span> </h3>
            <h3>Age: <span>{detail.age}</span> </h3>
            <h3>DOB: <span>{detail.dob}</span></h3>
            <h3>Email: <span>{detail.email}</span></h3>
            <h3>Gender: <span>{detail.gender}</span></h3>
            <h3>Qualification: <span>{detail.qualification}</span></h3>
            <h3>Indian: <span>{detail.indian?'Yes':'No'}</span></h3>
            <div className="flex flex-row justify-between">
            <button type='submit' className="button" onClick={handleEdit}>Edit</button>
            <button type='submit'className="button bg-red-700" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </div>
}
import { useState } from 'react';
import data from './Data';
import Model from 'react-model'
let Products = () => {

    let [protect, setProtect] = useState(data);
    let [title,setTitle]=useState(""); 
    let [description,setDescription]=useState("");
    let [price,setPrice]=useState(0);
    let [category,setCategory]=useState("");
    let [image,setImage]=useState("");
    let sub = (id) => {
        let filterproduct=protect.filter((cvalue)=>cvalue.id !==id);
        setProtect(filterproduct);

    }
    let one = (e) =>{
        setTitle(e.target.value);
    }
    let two = (e) =>{
        setDescription(e.target.value);
    }

    let three = (e) =>{
        setCategory(e.target.value);
    }

    let four = (e) =>{
        setPrice(e.target.value);
    }
    let five = (e) =>{
        setImage(e.target.value);
    }


    let submithandler = () =>{
        

        let newProduct={
            id: Math.round(Math.random()*3434),
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
        }

        setProtect([newProduct,...protect]);
    } 
    

    return (
        <div>
            <div className='B'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add New Products
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add New Products</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Title:</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" onChange={one} placeholder="Enter your Title"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Description:</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" onChange={two} placeholder="Enter Product Description"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Category:</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" onChange={three} placeholder="Enter Product Category"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Price:</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" onChange={four} placeholder="Enter your Title"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Image:</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" onChange={five} placeholder="Enter Image URL"/>
</div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={submithandler}>Submit</button>
      </div>
    </div>
  </div>
</div>
                {/* ending button */}
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>

                    </tr>

                </thead>
                {
                    protect.map((cvalue) => {
                        return <tbody>
                            <tr>
                                <td scope="col">{cvalue.id}</td>
                                <td scope="col">{cvalue.title}</td>
                                <td scope="col">{cvalue.description}</td>
                                <td scope="col"> <span className="badge bg-secondary">{cvalue.price}</span></td>
                                <td scope="col">{cvalue.category}</td>
                                <td scope="col"><img src={cvalue.image} alt="" style={{ width: 30 }} /></td>
                                <td scope="col">
                                    <button type="button" className="btn btn-primary" onClick={() => sub(cvalue.id)}>Delete</button>
                                    <button type="button" className="btn btn-danger A" >Edit</button>
                                </td>

                            </tr>

                        </tbody>

                    })
                }


            </table>

        </div>
    )
}
export default Products;
import { useState } from 'react';
import data from './Data';
import Model from 'react-model'
let Products = () => {

    let [protect, setProtect] = useState(data);
    let sub = (id) => {
        let filterproduct=protect.filter((cvalue)=>cvalue.id !==id);
        setProtect(filterproduct);

    }
    

    return (
        <div>
            <div className='B'><button type="button" className="btn btn-primary">Add Products</button></div>
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
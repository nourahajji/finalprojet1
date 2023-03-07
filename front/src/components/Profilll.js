// import React from 'react'
// import "./profilll.css";
// import Table from "react-bootstrap/Table";
// import { deletecomm } from "../JS/commSlice";
// import { useDispatch, useSelector } from 'react-redux';




// const profilll = ({ ping, setping }) => {
// const user = useSelector((state) => state.user?.user);
// const dispatch= useDispatch();
//   return (
//     <div>
//          <div>
//         <div className="main-content">
//             <div className="container-fluid d-flex align-items-center">
//             </div>
//           </div>
//           {/* Page content */}
//           <div className="container-fluid mt--7">
//             <div className="roya" style={{marginTop:"-241px"}}>
//               <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
//                 <div className="card card-profile shadow">
//                   <div className="row justify-content-center">
//                     <div className="col-lg-3 order-lg-2">
//                       <div className="card-profile-image">
//                         <a href="#">
//                           <img src={user ? user.img : <h1>...Loading</h1>} className="rounded-circle" />
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
//                     <div className="d-flex justify-content-between">
//                       <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
//                       <a href="#" className="btn btn-sm btn-default float-right">Message</a>
//                     </div>
//                   </div>
//                   <div className="card-body pt-0 pt-md-4">
//                     <div className="roya">
//                       <div className="col2">
//                         <div className="card-profile-stats d-flex justify-content-center mt-md-5">
//                           <div>
//                             <span className="heading">22</span>
//                             <span className="description">Friends</span>
//                           </div>
//                           <div>
//                             <span className="heading">10</span>
//                             <span className="description">Photos</span>
//                           </div>
//                           <div>
//                             <span className="heading">89</span>
//                             <span className="description">Comments</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <h3>
//                         Jessica Jones<span className="font-weight-light">, 27</span>
//                       </h3>
//                       <div className="h5 font-weight-300">
//                         <i className="ni location_pin mr-2" />Bucharest, Romania
//                       </div>
//                       <div className="h5 mt-4">
//                         <i className="ni business_briefcase-24 mr-2" />Solution Manager - Creative Tim Officer
//                       </div>
//                       <div>
//                         <i className="ni education_hat mr-2" />University of Computer Science
//                       </div>
//                       <hr className="my-4" />
//                       <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
//                       <a href="#">Show more</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-8 order-xl-1">
//                 <div className="card bg-secondary shadow">
//                   <div className="card-header bg-white border-0">
//                     <div className="row align-items-center">
//                       <div className="col-8">
//                         <h3 className="mb-0">My account</h3>
//                       </div>
//                       <div className="col-4 text-right">
//                         <a href="#!" className="btn btn-sm btn-primary">Settings</a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-body">
//                     <form>
//                       <h6 className="heading-small text-muted mb-4">User information</h6>
//                       <div className="pl-lg-4">
//                         <div className="roya">
//                           <div className="col-lg-6">
//                             <div className="form-group focused">
//                               <label className="form-control-label" htmlFor="input-username">Username</label>
//                               <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" defaultValue="lucky.jesse" />
//                             </div>
//                           </div>
//                           <div className="col-lg-6">
//                             <div className="form-group">
//                               <label className="form-control-label" htmlFor="input-email">Email address</label>
//                               <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="jesse@example.com" />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="roya">
//                           <div className="col-lg-6">
//                             <div className="form-group focused">
//                               <label className="form-control-label" htmlFor="input-first-name">First name</label>
//                               <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" defaultValue="Lucky" />
//                             </div>
//                           </div>
//                           <div className="col-lg-6">
//                             <div className="form-group focused">
//                               <label className="form-control-label" htmlFor="input-last-name">Last name</label>
//                               <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" defaultValue="Jesse" />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <hr className="my-4" />
//                       {/* Address */}
//                       <h6 className="heading-small text-muted mb-4">Vos Commandes</h6>
                    
//                       <Table striped bordered hover  style={{backgroundColor:"#b48b48"}}>
//                 <thead>
//                   <tr>
//                     <th id="th">img</th>
//                     <th id="th">nameproduct</th>
//                     <th id="th">price</th>
//                     <th id="th">date</th>
//                     <th id="th"></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {commandes
//                     ?.filter((el) => el.nameclient == user?.name)
//                     .map((el) => (
//                       <tr>
//                         <td>
//                           <img
//                             src={el?.img}
//                             style={{ width: "25px", height: "25px" }}
//                           />
//                         </td>
//                         <td>{el?.nameproduct}</td>
//                         <td>{el?.price}</td>
//                         <td>{el?.date}</td>
//                         <td>
//                           {" "}
//                           <button>
//                             x
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </Table>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <footer className="footer">
//           <div className="row align-items-center justify-content-xl-between">
//             <div className="col-xl-6 m-auto text-center">
              
//             </div>
//           </div>
//         </footer>
//       </div>
 
//   )
// }

// export default profilll
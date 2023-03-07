import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice/userSlice";
import Table from "react-bootstrap/Table";
 import { deletecomm } from "../JS/commSlice";
import Edituser from "../commponents/Edituser";

function Profil({ ping, setping }) {
 const user = useSelector((state) => state.user?.user);
 const commandes = useSelector((state) => state.comm?.commList);
 console.log(commandes);
 const navigate = useNavigate();
 const dispatch = useDispatch();
return (
 <div className="use">
      <div className="container bootstrap snippets bootdey">
        <div className="row" style={{marginTop:"-310px"}}>
          <div className="profile-nav col-md-3">
            <div className="panel"style={{marginTop:"8px"}}>
              <div className="user-heading round"id="jamil">
                <a href="#">
                  <img src={user ? user.img : <h1>...Loading</h1>} />
                </a>
                <h1>{user ? user.name : <h1>...Loading</h1>}</h1>
                <p>{user ? user.email : <h1>...Loading</h1>}</p>
              </div>
              <ul className="nav nav-pills nav-stacked">
                <li className="active">
                  <a href="#">
                    {" "}
                    <i className="fa fa-user" /> Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-calendar" /> Recent Activity{" "}
                  </a>
                </li>
                <li>
                  <a href="#" >
                    {" "}
                    <i className="" style={{marginTop:"172px"}} />
                    <Edituser ping={ping} setping={setping} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="pane" className="panel">
            <div className="bio-graph-heading">
              <h1>Vos Commande</h1>

              <Table striped bordered hover  style={{backgroundColor:"#b48b48",marginLeft:"51px"}}>
                <thead>
                  <tr>
                    <th id="th">img</th>
                    <th id="th">nameproduct</th>
                    <th id="th">price</th>
                    <th id="th">date</th>
                    <th id="th"></th>
                  </tr>
                </thead>
                <tbody>
                  {commandes
                    ?.filter((el) => el.nameclient == user?.name)
                    .map((el) => (
                      <tr>
                        <td>
                          <img
                            src={el?.img}
                            style={{ width: "25px", height: "25px" }}
                          />
                        </td>
                        <td>{el?.nameproduct}</td>
                        <td>{el?.price}</td>
                        <td>{el?.date}</td>
                        <td>
                          {" "}
                          <button
                            onClick={() => {
                              dispatch(deletecomm(el._id));
                              setping(!ping);
                            }}
                          >
                            x
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
            <div id="info" className="panel-body bio-graph-info" style={{marginLeft:"119px", marginTop:"-694px",bacgkroundColor:"#080808"}}>
              <div className="row" style={{fontSize:"17px"}}>
                <div className="bio-row">
                  <p>
                    <span>First Name :</span>
                    {user ? user.name : <h1>...Loading</h1>}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Last Name :</span>
                    {user ? user.LastName : <h1>...Loading</h1>}
                  </p>
                </div>
                <div className="bio-row">
                  <p id="bi">
                    <span> Email :</span>
                    {user ? user.email : <h1>...Loading</h1>}
                  </p>
                </div>
              
              </div>
            </div>
         </div>
        </div>
      </div>
         </div>
  );
}

export default Profil;

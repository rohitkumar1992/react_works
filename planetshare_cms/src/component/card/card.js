import React,{Component} from 'react';
const card = (props) =>{
return (          <div class="col-xl-3 col-md-3 mb-4">
                      <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="h5 mb-0 text-gray-800">{props.name}</div>
                                {props.name=="Top 3 Vendors" && <div class=" text-xs  mb-1">{props.count.map((result,key)=>{
                                  return(<div>{props.count[key]}</div>)
                                })}</div>}
                                {props.name=="Top 3 Services" && <div class="text-xs  mb-1">{props.count.map((result,key)=>{
                                  return(<div>{props.count[key]}</div>)
                                })}</div>}
                              {props.name!="Top 3 Vendors" && props.name!="Top 3 Services" && <div class="text-xs  mb-1">{props.count}</div>}
                            </div>
                            <div class="col-auto">
                              <i class="fas fa-calendar fa-2x text-gray-300" style={{color:"orange"}}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>);
}
export default card;
          // <i class="fas fa-fw fa-user col-md-4" style={{fontSize:'40px',color:"black"}}></i>



                    // <div class="col-xl-3 col-sm-3 mb-3">
                    //     <div class="card text-black bg-white o-hidden h-100">
                    //       <div class="card-body" style={{border:'1px solid black'}}>
                    //         <div class="card-body-icon row" >
                    //           <div class="col-md-12" style={{color:"black"}}>{props.name}</div>
                    //         </div>
                    //         <div class="mr-5" style={{fontSize:'35px',color:"black"}}>{props.count}</div>
                    //       </div>
                    //
                    //     </div>
                    //   </div>

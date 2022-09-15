import React from 'react'

export default function ScholarshipOption() {
  return (
    <>
        <div>
            <div>
                <div className="container ps-5 pt-2 shadow bg-body rounded text-start pb-3" style={{"width":"70%"}}>
                    <h1 className="mb-3 d-flex justify content-center ">--- Check Your Eligibility ---</h1> <hr /> 
                    <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-9 m-auto">
                            <table className="table border">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Scholarship Name</th>
                                        <th scope="col">Income</th>
                                        <th scope="col">Cast</th>
                                        <th scope="col">Grades</th>
                                        <th scope="col">loan</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        <tr>
                                        <th scope="row">1</th>
                                        <td>Scholarloan1</td>
                                        <td>less than 500000</td>
                                        <td>OBC-NCL</td>
                                        <td>Not Required</td>
                                        <td>upto RS.30000</td>
                                        <td><button type="button" className="btn btn-primary btn-sm h-30 mx-4">Apply</button></td>
                                      </tr>
                                      <tr>
                                      <th scope="row">2</th>
                                        <td>Scholarloan2</td>
                                        <td>Not Required</td>
                                        <td>SC/ST</td>
                                        <td>Not-Required</td>
                                        <td>upto RS.50000</td>
                                        <td><button type="button" className="btn btn-primary btn-sm h-30 mx-4">Apply</button></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">3</th>
                                        <td>Scholarloan3</td>
                                        <td>less than 800000</td>
                                        <td>OBC-NCl</td>
                                        <td>more than 8</td>
                                        <td>upto RS.10000</td>
                                        <td><button type="button" className="btn btn-primary btn-sm h-30 mx-4">Apply</button></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">4</th>
                                        <td>ScholarLoan4</td>
                                        <td>b/w 500000-800000</td>
                                        <td>OBC-NCl</td>
                                        <td>more than 6</td>
                                        <td>upto RS.10000</td>
                                        <td><button type="button" className="btn btn-primary btn-sm h-30 mx-4">Apply</button></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">5</th>
                                        <td>Scholarloan5</td>
                                        <td>less than 100000</td>
                                        <td>OBC-NCL</td>
                                        <td>more than 6</td>
                                        <td>upto RS.20000</td>
                                        <td><button type="button" className="btn btn-primary btn-sm h-30 mx-4">Apply</button></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">5</th>
                                        <td>Scholarshiploan6</td>
                                        <td>less than 100000</td>
                                        <td>General</td>
                                        <td>Not-Required</td>
                                        <td>upto RS.15000</td>
                                        <td><button type="button" className="btn btn-primary btn-sm h-30 mx-4">Apply</button></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">5</th>
                                        <td>ScholarShiploan7</td>
                                        <td>more than 800000</td>
                                        <td>OBC-NCL/General</td>
                                        <td>more than 8</td>
                                        <td>upto RS.40000</td>
                                        <td><button type="button" className="btn btn-primary btn-sm h-30 mx-4">Apply</button></td>
                                      </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

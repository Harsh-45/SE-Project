import React from 'react'

export default function Attendance() {
  return (
    <>
        <div>
            <div>
                <div className="container ps-5 pt-2 shadow bg-body rounded text-start pb-3" style={{"width":"70%"}}>
                    <h1 className="mb-3 ">--- Attendance ---</h1> <hr /> 
                    <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6 m-auto">
                            <table className="table border">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Subject Code</th>
                                        <th scope="col">Subject Name</th>
                                        <th scope="col">Maximum Hours</th>
                                        <th scope="col">Present Hours</th>
                                        <th scope="col">Absent Hours</th>
                                        <th scope="col">Attendence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        <tr>
                                        <th scope="row">1</th>
                                        <td>CS304L</td>
                                        <td>DAA</td>
                                        <td>50</td>
                                        <td>45</td>
                                        <td>5</td>
                                        <td>90 %</td>
                                      </tr>
                                      <tr>
                                      <th scope="row">2</th>
                                        <td>CS301L</td>
                                        <td>Compiler design</td>
                                        <td>50</td>
                                        <td>43</td>
                                        <td>7</td>
                                        <td>86 %</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">3</th>
                                        <td>CS302L</td>
                                        <td>Software Engineering</td>
                                        <td>50</td>
                                        <td>48</td>
                                        <td>2</td>
                                        <td>96 %</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">4</th>
                                        <td>CS305L</td>
                                        <td>Operating System</td>
                                        <td>50</td>
                                        <td>38</td>
                                        <td>12</td>
                                        <td>76 %</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">5</th>
                                        <td>CS303L</td>
                                        <td>Machine Learning</td>
                                        <td>50</td>
                                        <td>35</td>
                                        <td>15</td>
                                        <td>70 %</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">5</th>
                                        <td>CS301P</td>
                                        <td>Compiler Design Labaratory</td>
                                        <td>50</td>
                                        <td>47</td>
                                        <td>3</td>
                                        <td>94 %</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">5</th>
                                        <td>Operating System Labaratory</td>
                                        <td>DAA</td>
                                        <td>50</td>
                                        <td>44</td>
                                        <td>6</td>
                                        <td>88 %</td>
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

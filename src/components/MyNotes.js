import React, { Component } from 'react';
import { AppMenu } from './AppMenu';
import ProgressContent from './ProgressContent';
import { getStudentInfo } from "../services/aulaVirtualService";

export class MyNotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentId: 1,            
            studentInfo: {}, // studentInfo
        }
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.getStudentInfo();
    }

    getStudentInfo = () => {
        // get student info
        var globalStudentInfoObj = getStudentInfo(this.state.studentId);
        this.setState({
            studentInfo: globalStudentInfoObj.studentInfo
        });
    }

    render() {
        return (
            <>
                <div className="wrapper d-flex align-items-stretch">
                    <AppMenu />
                    
                    <div className="container" style={{ 'maxWidth': '700px' }}>
                        <h4 className="text-center mt-4">Reporte Calificaciones y Asistencia</h4>
                        <h5 className="text-center mt-1 mb-3">Módulo I</h5>

                        <table className="table">
                            <thead>
                                <tr className="table-light">
                                    <th scope="col">Clase</th>
                                    <th scope="col">Básico</th>
                                    <th scope="col">Libro</th>
                                    <th scope="col">Promedio</th>
                                    <th scope="col">Asistencia</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Fundamentos Doctrinales I</th>
                                    <td>56</td>
                                    <td>30</td>
                                    <td>86</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Principios Formación Espiritual</th>
                                    <td>54</td>
                                    <td>40</td>
                                    <td>94</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Fundamentos de Fe</th>
                                    <td>59,5</td>
                                    <td>24</td>
                                    <td>83,5</td>
                                    <td>80%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Pacto de Sangre</th>
                                    <td>48</td>
                                    <td>24</td>
                                    <td>72</td>
                                    <td>75%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Fundamentos Doctrinales II</th>
                                    <td>59,5</td>
                                    <td>24</td>
                                    <td>83,5</td>
                                    <td>80%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Principios de Oración</th>
                                    <td>54</td>
                                    <td>40</td>
                                    <td>94</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Ministerios Prácticos</th>
                                    <td>59,5</td>
                                    <td>24</td>
                                    <td>83,5</td>
                                    <td>80%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Religiones y Sectas</th>
                                    <td>48</td>
                                    <td>24</td>
                                    <td>72</td>
                                    <td>75%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Principios de Sanidad</th>
                                    <td>59,5</td>
                                    <td>24</td>
                                    <td>83,5</td>
                                    <td>80%</td>
                                </tr>
                                

                            </tbody>
                        </table>
                    </div>

                    <ProgressContent studentInfo={this.state.studentInfo} />                     
                </div>

                
            </>            
        );
    }
}

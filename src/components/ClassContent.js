import React from 'react';

const ClassContent = (props) => {
    const {
        name,
        video_url,
        maestro,
        description
    } = props.classContent;
    
    // console.log(' *** Class content ***');
    // console.log('name:', name);
    // console.log('video_url:', video_url);
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <div className="text-center text-md-left" style={{ 'display': 'none' }}>
                <button onClick={props.handleClassCompleted}>simular progress</button>
            </div>
            <h2>{props.name}</h2>
            <h4>Clase: {name}</h4>
            <h6>Maestro: {maestro} </h6>
            <div id="videoClases" className="videoBox">
                <video controls
                    src={video_url}
                    onEnded={props.handleClassCompleted}>
                    <source src={video_url} media="screen and (min-width:800px)" type="video/mp4" />
                    <source src={video_url} media="screen and (max-width:799px)" type="video/mp4" />
                </video>
            </div>
            <div className="container-lg bg-light p-3">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link nav-link active" id="nav-introduction-tab" data-toggle="tab" href="#nav-introduction" role="tab" aria-controls="nav-introduction" aria-selected="false">Descripción</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link nav-link" id="nav-maestro-tab" data-toggle="tab" href="#nav-maestro" role="tab" aria-controls="nav-maestro" aria-selected="false">Maestro</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link nav-link" id="nav-preguntas-tab" data-toggle="tab" href="#nav-preguntas" role="tab" aria-controls="nav-preguntas" aria-selected="false">Preguntas al Maestro</a>
                    </li>
                </ul>
                <div className="container tab-content bg-white p-3">
                    <div className="tab-pane fade show active" id="nav-introduction" role="tabpanel" aria-labelledby="nav-introduction-tab">
                    <h4>PRINCIPIOS DE ORACIÓN MÓDULO I</h4>
                        <h5>OBJETIVO:</h5>
                        <p>
                            Crear conciencia en el estudiante, de lo trascendental que es la oración en nuestro caminar como creyentes, hasta lograr hacer de ella una práctica en nuestro diario vivir.
                        </p>
                        <h5>TEMAS:</h5>
                        <p>
                            1. Introducción<br />
                            2. Tres tipos de hombres que Dios busca hoy<br />
                            3. El Amor, el fundamento para una oración exitosa<br />
                            4. La guía del Espíritu Santo en la Oración<br />
                            5. Derribando fortalezas<br />
                            6. La verdadera guerra espiritual
                        </p>
                        <h5>SISTEMA DE  CALIFICACIÓN</h5>
                        <p>
                            1. Examen final - 80%<br />
                            2. Lectura del Libro "LA ORACIÓN QUE PREVALECE"	- 20%
                        </p>
                    </div>

                    <div className="tab-pane fade" id="nav-maestro" role="tabpanel" aria-labelledby="nav-maestro-tab">
                        <h5>{maestro}</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique fringilla eleifend. Aenean diam mauris, malesuada ac sem vel, faucibus efficitur lorem. Donec egestas nec orci non sodales.
                            Vestibulum at ex non ligula posuere hendrerit id id libero. Fusce dignissim congue mi, ac gravida elit finibus sit amet. Nulla mollis lacus quis pretium pharetra. Maecenas ac faucibus felis.
                        </p>
                        <p>
                            Morbi vulputate libero ut tortor fermentum, eu eleifend sapien posuere. Sed rhoncus vitae tellus quis congue. Etiam elementum sit amet quam ac laoreet. Nunc efficitur, nunc at lobortis convallis,
                            nunc sem porttitor quam, quis tincidunt lacus mi vel neque. Vestibulum iaculis nisl libero, et laoreet nunc sollicitudin quis. Vestibulum a gravida purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec mollis mi. Pellentesque est nibh, imperdiet ut volutpat ac, pulvinar eu enim. Etiam id placerat sem.
                        </p>
                    </div>

                    <div className="tab-pane fade" id="nav-preguntas" role="tabpanel" aria-labelledby="nav-preguntas-tab">
                        <div className="mb-5">
                            <form action="#" className="preguntas-form">
                                <div className="form-group d-flex">
                                    <textarea rows="5" className="form-control" placeholder="Escriba su pregunta aquí"></textarea>
                                </div>
                            </form>
                            <button className="text-center test-button">Enviar <i className="fa fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ClassContent;

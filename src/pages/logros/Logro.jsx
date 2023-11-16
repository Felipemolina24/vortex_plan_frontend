
import Sidebar from '../../components/sidebar/Sidedar'
import { useTasks } from '../../context/Context'
import { useEffect } from 'react'
import './Logro.css'


const Logro = () => {


  const { points, loadPoints,  levels, tasks, loadTasks  } = useTasks()


  useEffect(() => {
    loadTasks();
    loadPoints();
   
  }, [loadTasks, loadPoints]);

  const completedTasks = tasks.filter(task => task.estado === 1);



 




  return (
    <>
      <Sidebar />
      <div id='principal'>
        <div className='completadas'>
          {completedTasks.length === 0 ? (
            <p>No hay actividades completadas</p>
          ) : (
            completedTasks.map((task, index) => (
              <div key={index} className="task-card" id='task-points'>
                <div className="task-content">
                  <div className='completed-info'>
                    <h2>{task.nombre}</h2>
                    <h2 className='puntos'> </h2>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div className="progress"></div>
                    </div>
                    <p>100%</p>
                  </div>
                </div>         
              </div>
            ))
          )}
        </div>


        <div class="card-level">
          <div class="img">
            <img src="./perfil.png" alt="" />
          </div>
          <div class="content-logro">
            <h2>Alvaro</h2>
            <p>Desarrollador Junior</p>
            <div class="center">
              <div class="box-logro">
                {levels.map((level, index) => (
                  <div key={index} className="">
                    <p > Nivel: {level.num_nivel}</p>
                 {/*<button onClick={() => aumentarNivel(level.id)}> subir</button>*/ } 
                  </div>
                ))}
              </div>
              <div class="box-logro">
                {points.map((point, index) => (
                  <div key={index} className="">

                    <p > Puntuación total: {point.cantidad_puntos}</p>



                  </div>

                ))}
              </div>
            </div>

          </div>
        </div>

                 
      </div>

    </>
  )
}

export default Logro
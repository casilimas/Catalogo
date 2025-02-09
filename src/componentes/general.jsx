import React, { useRef } from 'react';

function MiPrimerComponente() {
  // Crear un objeto de referencias dinámico
  const imgRefs = useRef({});

  // Función para alternar pantalla completa
  const toggleFullScreen = (id) => {
    const imgRef = imgRefs.current[id]; // Obtener la referencia correcta
    if (imgRef) {
      if (!document.fullscreenElement) {
        if (imgRef.requestFullscreen) {
          imgRef.requestFullscreen();
        } else if (imgRef.webkitRequestFullscreen) { // Safari
          imgRef.webkitRequestFullscreen();
        } else if (imgRef.msRequestFullscreen) { // IE/Edge
          imgRef.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  };

  return (
    <div className='layout'>
      
      <header className="header">
        <h1 className='titulo'>MIS PELUCHES</h1>
      </header>

      <div className='columna'>
        {/* Imagen 1 */}
        <div className="contenido">
          <img
            src={`${import.meta.env.BASE_URL}fotos/osita.jpg`}
            alt="Osita de peluche"
            ref={(el) => (imgRefs.current['osita'] = el)}
            onClick={() => toggleFullScreen('osita')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/t9s2w2'}
          >
            osita
            <div className="whatsapp">
              <img src={`${import.meta.env.BASE_URL}fotos/whatsappe.jpg`} alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>



        

        



        {/* Imagen 2 */}
        <div className="contenido">
          <img
            src="/fotos/rata.jpg"
            alt="rata"
            ref={(el) => (imgRefs.current['rata'] = el)}
            onClick={() => toggleFullScreen('rata')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/t9s2w2'}
          >
            Rata
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>




        {/* Imagen 3 */}
        <div className="contenido">
          <img
            src="/fotos/peluche.jpg"
            alt="Otro peluche"
            ref={(el) => (imgRefs.current['peluche'] = el)}
            onClick={() => toggleFullScreen('peluche')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/t9s2w2'}
          >
            Peluche peludos
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>



        {/* Imagen 4 */}
        <div className="contenido">
          <img
            src="/fotos/peluperro.jpg"
            alt="peluche perro"
            ref={(el) => (imgRefs.current['peluperro'] = el)}
            onClick={() => toggleFullScreen('peluperro')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/t9s2w2'}
          >
            Peluche perro
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>



        {/* Imagen 5 */}
        <div className="contenido">
          <img
            src="/fotos/pilota.jpg"
            alt="Osita de peluche"
            ref={(el) => (imgRefs.current['pilota'] = el)}
            onClick={() => toggleFullScreen('pilota')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/w1g0i5'}
          >
            Imagen de prueba posiblemente a cargar próximamente
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 6 */}
        <div className="contenido">
          <img
            src="/fotos/magnetotermico.jpg"
            alt="magnetotermico"
            ref={(el) => (imgRefs.current['magnetotermico'] = el)}
            onClick={() => toggleFullScreen('magnetotermico')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/kpmba2'}
          >
            Imagen de prueba posiblemente a cargar próximamente
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>



        {/* Imagen 6 */}
        <div className="contenido">
          <img
            src="/fotos/breker.jpg"
            alt="magnetotermico"
            ref={(el) => (imgRefs.current['breker'] = el)}
            onClick={() => toggleFullScreen('breker')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/js29c5'}
          >
            Breker de 3 polos grandes de 3x100 amp en adelante
            <p> 断路器 3 极，大型，3x100A 及以上</p>
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>




        {/* Imagen 7 */}
        <div className="contenido">
          <img
            src="/fotos/interruptor.jpg"
            alt="interruptor"
            ref={(el) => (imgRefs.current['interruptor'] = el)}
            onClick={() => toggleFullScreen('interruptor')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/0hjw1p'}
          >
            interruptor de 3 posiciones 22 mm  /  22mm 三档开关
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 8 */}
        <div className="contenido">
          <img
            src="/fotos/contactor.jpg"
            alt="contactor"
            ref={(el) => (imgRefs.current['contactor'] = el)}
            onClick={() => toggleFullScreen('contactor')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/z3gkrp'}
          >
            contactor existen varios amperajes  /  请阅读: 正泰品牌多种电流接触器
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>



        {/* Imagen 9 */}
        <div className="contenido">
          <img
            src="/fotos/contactorVarios.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['contactorVarios'] = el)}
            onClick={() => toggleFullScreen('contactorVarios')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/emtprf'}
          >
            contactor existen varios amperajes  /  请阅读: 正泰品牌多种电流接触器
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 22 */}
        <div className="contenido">
          <img
            src="/fotos/termicos.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['termicos'] = el)}
            onClick={() => toggleFullScreen('termicos')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/fgoqsd'}
          >
            RELE TERMICOS CHINT / 正泰热继电器
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>



        {/* Imagen 10 */}
        <div className="contenido">
          <img
            src="/fotos/fotocelulas.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['fotocelulas'] = el)}
            onClick={() => toggleFullScreen('fotocelulas')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/294rn0'}
          >
            fotocelulas de 110 y 220 voltios / 110伏和220伏光电开关
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 11 */}
        <div className="contenido">
          <img
            src="/fotos/bombilloDos.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['bombilloDos'] = el)}
            onClick={() => toggleFullScreen('bombilloDos')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/l4zft1'}
          >
            BOMBILLOS MULTIVOLTAJES
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 11 */}
        <div className="contenido">
          <img
            src="/fotos/bombilloUno.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['bombilloUno'] = el)}
            onClick={() => toggleFullScreen('bombilloUno')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/l4zft1'}
          >
            BOMBILLOS MULTIVOLTAJES
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>



        {/* Imagen 12 */}
        <div className="contenido">
          <img
            src="/fotos/lamparaLiviana.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['lamparaLiviana'] = el)}
            onClick={() => toggleFullScreen('lamparaLiviana')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/dpzd6s'}
          >
            Lampara liviana multivoltaje de 100 wats / 100瓦轻型多电压灯
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>



        {/* Imagen 13 */}
        <div className="contenido">
          <img
            src="/fotos/focosSenalizadores.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['focosSenalizadores'] = el)}
            onClick={() => toggleFullScreen('focosSenalizadores')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/7mxdmv'}
          >
            FOCOS SEñALIZADORES CARIOS COLORES / 指示灯，多个颜色
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>



        {/* Imagen 14 */}
        <div className="contenido">
          <img
            src="/fotos/relojHorario.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['relojHorario'] = el)}
            onClick={() => toggleFullScreen('relojHorario')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/u9nwqn'}
          >
            RELOJ HORARIO ESPECIFICA EL VOLTAJE / 定时器，请指定电压
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>




        {/* Imagen 15 */}
        <div className="contenido">
          <img
            src="/fotos/flotantesElectricos.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['flotantesElectricos'] = el)}
            onClick={() => toggleFullScreen('flotantesElectricos')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/kceo0l'}
          >
            FLOTANTES ELECTRICOS 3 Y 5 MTROS / 3米和5米电浮子
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 16 */}
        <div className="contenido">
          <img
            src="/fotos/magnetotermicoDoble.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['magnetotermicoDoble'] = el)}
            onClick={() => toggleFullScreen('magnetotermicoDoble')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/g64vg5'}
          >
            magneto termico doble de varios amperajes / 多种电流的双极磁热断路器
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>



        {/* Imagen 17 */}
        <div className="contenido">
          <img
            src="/fotos/magnetotermicoTriple.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['magnetotermicoTriple'] = el)}
            onClick={() => toggleFullScreen('magnetotermicoTriple')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/g64vg5'}
          >
            MAGNETOTERMICO TRIPLE VARIOS AMPERAJES / 多种电流的三极磁热断路器
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 18 */}
        <div className="contenido">
          <img
            src="/fotos/temporizadoresChint.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['temporizadoresChint'] = el)}
            onClick={() => toggleFullScreen('temporizadoresChint')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/g64vg5'}
          >
            TEMPORIZADORES CHINT CONEXION Y DESCONEXION / 正泰定时器，连接与断开
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 19 */}
        <div className="contenido">
          <img
            src="/fotos/interruptorMuletilla.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['interruptorMuletilla'] = el)}
            onClick={() => toggleFullScreen('interruptorMuletilla')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/e9657p'}
          >
            INTERRUPTOR DE PALANCA 3 POSICIONES / 三位拨动开关
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 20 */}
        <div className="contenido">
          <img
            src="/fotos/terminalHembra.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['terminalHembra'] = el)}
            onClick={() => toggleFullScreen('terminalHembra')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/qybugd'}
          >
            TERMINAL HEMBRA PARA CABLE 14 / 14号电缆母端子
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 20 */}
        <div className="contenido">
          <img
            src="/fotos/terminalOjo.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['terminalOjo'] = el)}
            onClick={() => toggleFullScreen('terminalOjo')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/gyh2m2'}
          >
            TERMINAL OJO PARA CABLE 14 / 14号电缆环形端子
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 21 */}
        <div className="contenido">
          <img
            src="/fotos/terminalPalca.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['terminalPalca'] = el)}
            onClick={() => toggleFullScreen('terminalPalca')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/ufi4xx'}
          >
            TERMINAL U PARA CABLE 14 / 电缆U型端子
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 21 */}
        <div className="contenido">
          <img
            src="/fotos/terminalPuntaHueca.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['terminalPuntaHueca'] = el)}
            onClick={() => toggleFullScreen('terminalPuntaHueca')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/gnpp45'}
          >
            TERMINAL PUNTA HUECA / 空心端子
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>

        {/* Imagen 23 */}
        <div className="contenido">
          <img
            src="/fotos/marcadores.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['marcadores'] = el)}
            onClick={() => toggleFullScreen('marcadores')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/6b2yko'}
          >
            MARCA CABLES EN NUMEROS / 电缆标记数字
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 24 */}
        <div className="contenido">
          <img
            src="/fotos/amarres.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['amarres'] = el)}
            onClick={() => toggleFullScreen('amarres')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/alrxyd'}
          >
            AMARRES PARA CABLES DISTINTAS GOSOR Y LARGO / 不同粗细和长度的电缆扎带
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 25 */}
        <div className="contenido">
          <img
            src="/fotos/botneraSobrepuesta.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['botneraSobrepuesta'] = el)}
            onClick={() => toggleFullScreen('botneraSobrepuesta')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/2nxb9v'}
          >
            BOTONERA SOBRE PUESTA / 按钮面板
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 26 */}
        <div className="contenido">
          <img
            src="/fotos/borneraVarias.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['borneraVarias'] = el)}
            onClick={() => toggleFullScreen('borneraVarias')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/7764mw'}
          >
            BORNETAS DE VARIOS PUNTOS / 多点接线端子
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 27 */}
        <div className="contenido">
          <img
            src="/fotos/basePequena.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['basePequena'] = el)}
            onClick={() => toggleFullScreen('basePequena')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/mc11nm'}
          >
            BASE 8 Y 11 PINES MARCA RELPOL / Relpol品牌8针和11针底座
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 28 */}
        <div className="contenido">
          <img
            src="/fotos/RELE.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['RELE'] = el)}
            onClick={() => toggleFullScreen('RELE')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/z564bv'}
          >
            RELE 8 Y 11 PINES MARCA RELPOL / Relpol品牌8针和11针继电器
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 29 */}
        <div className="contenido">
          <img
            src="/fotos/pulsador.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['pulsador'] = el)}
            onClick={() => toggleFullScreen('pulsador')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/nrt9ji'}
          >
            PULSADORES VERDE Y ROJO / 绿色和红色按钮
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 30 */}
        <div className="contenido">
          <img
            src="/fotos/micros.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['micros'] = el)}
            onClick={() => toggleFullScreen('micros')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = 'https://wa.link/dzrft3'}
          >
            MICRO INTERUPTORES / 微型开关
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>


        {/* Imagen 31 */}
        <div className="contenido">
          <img
            src="/fotos/panico.png"
            alt="contactor"
            ref={(el) => (imgRefs.current['panico'] = el)}
            onClick={() => toggleFullScreen('panico')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="invisible-button"
            onClick={() => window.location.href = ''}
          >
            INTERRUPTORES DE PANICO / 紧急开关
            <div className="whatsapp">
              <img src="/fotos/whatsappe.jpg" alt="WhatsApp" className="whatsapp-icon" />
            </div>
          </button>
        </div>






      </div>
    </div>
  );
}

export default MiPrimerComponente;

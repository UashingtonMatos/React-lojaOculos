import './estiloTopo.css';

export default function Topo() {
    return (
        <header>
            <div className="limitar-secao container-topo">
                <img src="assets\logo.png" alt="logo" />

                <nav className="menu">
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </nav>
            </div>
        </header>
    );
};
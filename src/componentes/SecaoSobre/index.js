import "./estiloSecaoSobre.css";

export default function SecaoSobre() {
    return (
        <section className="secaoSobre" id="sobre">
            <div className="limitar-secao">
                <h2>QUEM SOMOS NÓS?</h2>
                <p className="pSobre">Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

                <div className="containerCardSobre">
                    <img className="cardSobre" src="assets/loja.png" alt="" />

                    <div className="cardSobre cardSobreTexto">
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>

                    <div className="cardSobre cardSobreTexto">
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>

                    <img className="cardSobre" src="assets/atendimento.png" alt="" />

                </div>
            </div>
        </section>
    )
}
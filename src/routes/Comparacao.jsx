import React, { useEffect, useState } from "react"
import { ComparacaoStyle } from '../css/ComparacaoStyle'
import { SimuladorStyle} from '../css/SimuladorStyle'
import { energySources } from '../data'
import Grafico from '../components/Grafico'

const Comparacao = () => {
    const [selectedRegion, setSelectedRegion] = useState("Global");
    const [selectedEnergySource, setSelectedEnergySource] = useState("Solar");
    const [filteredData, setFilteredData] = useState([]);
    const [consumo, setConsumo] = useState(0);
    const [energia, setEnergia] = useState("Solar");
    const [resultado, setResultado] = useState(null);

    // Filtragem de dados com base nos filtros selecionados
    useEffect(() => {
        const filterData = () => {
          const regionFiltered = energySources.filter((source) =>
            selectedRegion === "Global" || source.region === selectedRegion
          );
          const energyFiltered = regionFiltered.filter((source) =>
            selectedEnergySource === "Solar"
              ? source.type === "Solar"
              : selectedEnergySource === "Eólica"
              ? source.type === "Eólica"
              : source.type === "Hidráulica"
          );
          setFilteredData(energyFiltered);
        };
        filterData();
      }, [selectedRegion, selectedEnergySource]);

    // Lógica para o simulador
    const handleSubmit = (e) => {
        e.preventDefault();
        let impacto = 0;
        if (energia === "Solar") {
            impacto = consumo * 0.5; 
        } else if (energia === "Eólica") {
            impacto = consumo * 0.3; 
        } else if (energia === "Hidráulica") {
            impacto = consumo * 0.2; 
        }
        setResultado(impacto);
    };

    return (
        <ComparacaoStyle>
            <div className="container">
                <div className="titulo-inicio">
                    <h1>COMPARAÇÃO DE FONTES DE ENERGIA</h1>
                    <p>Compare diferentes fontes de energia e entenda seus custos, impactos ambientais e acessibilidade global.</p>
                </div>

                <section className="filtro">
                <select onChange={(e) => setSelectedRegion(e.target.value)}>
                    <option value="Global">Global</option>
                    <option value="Europe">Europa</option>
                    <option value="US">Estados Unidos</option>
                    <option value="Brasil">Brasil</option>  {/* Adicionei o Brasil aqui */}
                </select>
                <select onChange={(e) => setSelectedEnergySource(e.target.value)}>
                    <option value="Solar">Solar</option>
                    <option value="Eólica">Eólica</option>
                    <option value="Hidráulica">Hidráulica</option>
                </select>
                </section>

                <section className="tabela-comparacao">
                    <table>
                        <thead>
                            <tr>
                                <th>Fonte de Energia</th>
                                <th>Custo por kWh</th>
                                <th>Impacto Ambiental</th>
                                <th>Acessibilidade</th>
                                <th>Eficiência</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((source) => (
                                <tr key={source.id}>
                                    <td>{source.type}</td>
                                    <td>{source.costPerKWh}</td>
                                    <td>{source.environmentalImpact}</td>
                                    <td>{source.accessibility}</td>
                                    <td>{source.efficiency}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="grafico">
                <div className="grafico-container">
                    <h3>Gráfico Interativo</h3>
                    <Grafico data={filteredData} />
                </div>
                </section>

                <SimuladorStyle>
                    <section className="simulador">
                        <h3>Simule o Impacto ou Economia</h3>
                        <div className="simulator-form">
                            <form onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <label htmlFor="consumo">Consumo de Energia (kWh):</label>
                                    <input
                                        type="number"
                                        id="consumo"
                                        value={consumo}
                                        onChange={(e) => setConsumo(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="energia">Escolha a Fonte de Energia:</label>
                                    <select
                                        id="energia"
                                        value={energia}
                                        onChange={(e) => setEnergia(e.target.value)}
                                        required
                                    >
                                        <option value="Solar">Solar</option>
                                        <option value="Eólica">Eólica</option>
                                        <option value="Hidráulica">Hidráulica</option>
                                    </select>
                                </div>
                                <button type="submit">Calcular Impacto</button>
                            </form>
                            {resultado && (
                                <div className="resultado">
                                    <h4>Impacto Estimado: {resultado.toFixed(2)} unidades</h4>
                                </div>
                            )}
                        </div>
                    </section>
                </SimuladorStyle>

                <section className="reflexao">
                    <h3>Reflexão sobre Acessibilidade à Energia</h3>
                    <p>O acesso universal à energia renovável é essencial para o crescimento econômico e para a redução das desigualdades no mundo. Reflita sobre como sua escolha de fonte de energia pode impactar positivamente o futuro do planeta.</p>
                </section>
            </div>
        </ComparacaoStyle>
    );
};

export default Comparacao;

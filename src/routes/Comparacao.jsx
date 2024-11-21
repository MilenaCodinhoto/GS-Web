import React, { useEffect, useState } from "react"
import { ComparacaoStyle } from '../css/ComparacaoStyle'
import { energySources } from   '../data';

const Comparacao = () => {
    const [selectedRegion, setSelectedRegion] = useState("Global");
    const [selectedEnergySource, setSelectedEnergySource] = useState("Solar");
    const [filteredData, setFilteredData] = useState([]);
  
    // Simulação de filtragem de dados com base nos filtros selecionados
    useEffect(() => {
      const filterData = () => {
        const regionFiltered = energySources.filter((source) =>
          selectedRegion === "Global" ? true : source.region === selectedRegion
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
                    {/* Inserir componente de gráfico aqui */}
                </div>
                </section>

                <section className="simulador">
                <h3>Simule o Impacto ou Economia</h3>
                <div className="simulator-form">
                    {/* Componente ou formulário para simulação */}
                </div>
                </section>

                <section className="reflexao">
                <h3>Reflexão sobre Acessibilidade à Energia</h3>
                <p>O acesso universal à energia renovável é essencial para o crescimento econômico e para a redução das desigualdades no mundo. Reflita sobre como sua escolha de fonte de energia pode impactar positivamente o futuro do planeta.</p>
                </section>
            </div>
        </ComparacaoStyle>
    )
}

export default Comparacao
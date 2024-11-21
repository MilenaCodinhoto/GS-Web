import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        fonte: 'Solar',
        custo: 0.13,
        impacto: 2,
        acessibilidade: 4,
    },
    {
        fonte: 'Eólica',
        custo: 0.08,
        impacto: 1,
        acessibilidade: 3,
    },
    {
        fonte: 'Hidráulica',
        custo: 0.10,
        impacto: 3,
        acessibilidade: 5,
    },
];

const Grafico = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="fonte" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="custo" fill="#82ca9d" name="Custo por kWh" />
                <Bar dataKey="impacto" fill="#8884d8" name="Impacto Ambiental" />
                <Bar dataKey="acessibilidade" fill="#ffc658" name="Acessibilidade" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Grafico;

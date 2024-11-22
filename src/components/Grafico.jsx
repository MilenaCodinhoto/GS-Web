import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Grafico = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="costPerKWh" fill="#82ca9d" name="Custo por kWh" />
                <Bar dataKey="environmentalImpact" fill="#8884d8" name="Impacto Ambiental" />
                <Bar dataKey="accessibility" fill="#ffc658" name="Acessibilidade" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Grafico;

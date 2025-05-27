import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const ResumenGrafico = ({ chartData, diaActual, diaAnalizado }) => (
  <div style={{ width: '100%', height: 300 }}>
    <h3>
      Comparativo entre {diaActual} (Actual) y {diaAnalizado || diaActual} (Analizado)
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Actual" fill="#8884d8" />
        <Bar dataKey="Analizado" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ResumenGrafico;
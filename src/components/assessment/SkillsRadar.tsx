import React from 'react';

const SkillsRadar = () => {
  const skills = [
    { name: 'Verbal', score: 85 },
    { name: 'Numerical', score: 75 },
    { name: 'Abstract', score: 90 },
    { name: 'Spatial', score: 70 },
    { name: 'Mechanical', score: 80 }
  ];

  const maxScore = 100;
  const centerX = 150;
  const centerY = 150;
  const radius = 120;

  const getCoordinates = (index: number, score: number) => {
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
    const distance = (score / maxScore) * radius;
    return {
      x: centerX + distance * Math.cos(angle),
      y: centerY + distance * Math.sin(angle)
    };
  };

  const points = skills.map((skill, index) => 
    getCoordinates(index, skill.score)
  );

  const pathData = points
    .map((point, index) => 
      index === 0 ? `M ${point.x},${point.y}` : `L ${point.x},${point.y}`
    )
    .join(' ') + ' Z';

  return (
    <div className="flex justify-center">
      <svg width="300" height="300" className="transform -rotate-90">
        {/* Background circles */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, index) => (
          <circle
            key={index}
            cx={centerX}
            cy={centerY}
            r={radius * scale}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {skills.map((_, index) => {
          const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
          const endX = centerX + radius * Math.cos(angle);
          const endY = centerY + radius * Math.sin(angle);
          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={endX}
              y2={endY}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          );
        })}

        {/* Skills polygon */}
        <path
          d={pathData}
          fill="rgba(249, 115, 22, 0.2)"
          stroke="#f97316"
          strokeWidth="2"
        />

        {/* Skill points */}
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#f97316"
          />
        ))}
      </svg>

      {/* Legend */}
      <div className="ml-8 space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2" />
            <span className="text-sm">
              {skill.name}: {skill.score}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsRadar;
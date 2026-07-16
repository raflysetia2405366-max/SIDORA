import "./Legend.css";
import { Building2, School, Church, HeartPulse, MapPinned } from "lucide-react";

const AREA_ITEMS = [
  { key: "desa", label: "Batas Desa", color: "#1F3D2B", type: "line-dashed" },
  { key: "borogragal", label: "Dusun Borogragal", color: "#ef4444", type: "fill" },
  { key: "jaraan", label: "Dusun Jaraan", color: "#3b82f6", type: "fill" },
  { key: "karangan", label: "Dusun Karangan", color: "#f59e0b", type: "fill" },
  { key: "karangjuwet", label: "Dusun Karangjuwet", color: "#8b5cf6", type: "fill" },
];

const FACILITY_ITEMS = [
  { key: "office", label: "Kantor Desa", icon: Building2 },
  { key: "school", label: "Sekolah", icon: School },
  { key: "mosque", label: "Masjid", icon: Church },
  { key: "posyandu", label: "Posyandu", icon: HeartPulse },
  { key: "tourism", label: "Tempat Wisata", icon: MapPinned },
];

function Legend({ layers = {} }) {
  const activeAreas = AREA_ITEMS.filter((item) => layers[item.key]);
  const activeFacilities = FACILITY_ITEMS.filter((item) => layers[item.key]);

  if (activeAreas.length === 0 && activeFacilities.length === 0) return null;

  return (
    <div className="legend">
      <h4>Legenda</h4>

      {activeAreas.length > 0 && (
        <ul className="legend-group">
          {activeAreas.map((item) => (
            <li key={item.key}>
              <span
                className={`legend-swatch ${item.type}`}
                style={{ "--swatch-color": item.color }}
              />
              {item.label}
            </li>
          ))}
        </ul>
      )}

      {activeFacilities.length > 0 && (
        <ul className="legend-group">
          {activeFacilities.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.key}>
                <span className="legend-icon">
                  <Icon size={14} />
                </span>
                {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Legend;
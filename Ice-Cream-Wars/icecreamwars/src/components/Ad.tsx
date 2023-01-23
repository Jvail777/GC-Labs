import "../css/Ad.css";

interface AdProperties {
  flavor: string;
  isLight: boolean;
  fontSize: number;
}

function Ad(props: AdProperties) {
    let className = "Ad " + (props.isLight ? "Ad--light" : "Ad--dark");
  return (
    <div className={className}>
      <p>Vote for</p>
      <p className="propsFlavor" style={{ fontSize: props.fontSize }}>{props.flavor}</p>
    </div>
  )
}

export default Ad;

export default function LocalLink({ routeName, pathName, className, onClick }) {
  return (
    <a href={pathName} onClick={onClick}>
      <button className={className}>{routeName}</button>
    </a>
  );
}

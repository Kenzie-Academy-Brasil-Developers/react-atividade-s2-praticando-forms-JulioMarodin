import './styles.css';

const UserData = ({ data }) => {
  return (
    <div className="userData">
      <p>User name: {data.username}</p>
      <p>Name: {data.name}</p>
      <p>Quanto custa um elefante: R${data.elefCost}</p>
    </div>
  );
};

export default UserData;

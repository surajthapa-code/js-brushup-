function JobCard(companyName, role, status) {
  return (
    <div>
      <h3>Company Name: {companyName}</h3>
      <p>Role: {role}</p>
      <p>status {status}</p>
    </div>
  );
}

export default JobCard;

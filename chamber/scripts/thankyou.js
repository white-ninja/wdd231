const params = new URLSearchParams(window.location.search);

document.getElementById("results").innerHTML = `
<h2>Your Application Details</h2>
<p><strong>Name:</strong> ${params.get("fname")} ${params.get("lname")}</p>
<p><strong>Email:</strong> ${params.get("email")}</p>
<p><strong>Phone:</strong> ${params.get("phone")}</p>
<p><strong>Business:</strong> ${params.get("business")}</p>
<p><strong>Date Submitted:</strong> ${new Date(params.get("timestamp")).toLocaleString()}</p>
`;
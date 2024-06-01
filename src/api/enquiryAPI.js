const postFormPlanEnquiry = async (data) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      "http://localhost:3001/v1/plans/enquiry",
      requestOptions
    );
    if (!response.ok) {
      throw Error(`Error occured with status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw Error(`Something happened ${error}`);
  }
};

export { postFormPlanEnquiry };

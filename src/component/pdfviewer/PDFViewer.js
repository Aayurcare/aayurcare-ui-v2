const PDFPage = ({ url }) => {
  return (
    <div style={{ height: "95vh" }}>
      <object data={url} type="application/pdf" width="100%" height="100%">
        <p>
          Alternative text - include a link <a href={url}>to the PDF!</a>
        </p>
      </object>
    </div>
  );
};

export default PDFPage;

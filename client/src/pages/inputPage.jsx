

const InputPage = () => {
  const time = new Date();
  const date = time.toISOString().substr(0, 10);
  console.log(date);
  return (
    <div>
      <form>
        <div className="form-date">
          <label> Start Date: 
            <input type="date" defaultValue={date} />
          </label>
          <label> End Date: 
            <input type="date" defaultValue={date} />
          </label>
        </div>
      </form>
    </div>
  );
};

export default InputPage;

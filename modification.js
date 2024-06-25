<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
  {popupInfo && <Popup data={popupInfo} onClose={closePopup} />}
  
  <div style={{ flex: '1 1 calc(50% - 20px)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
    <div style={{ marginBottom: '10px' }}>
      <label>
        Year:
        <select value={year} onChange={handleYearChange} style={{ marginLeft: '10px' }}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </label>
    </div>
    <Bar data={data} options={options} />
  </div>
  
  <div style={{ flex: '1 1 calc(50% - 20px)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
    <div style={{ marginBottom: '10px' }}>
      <label>
        Year:
        <select value={year} onChange={handleYearChange} style={{ marginLeft: '10px' }}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </label>
    </div>
    <Bar data={data2} options={options2} />
  </div>
  
  <div style={{ flex: '1 1 calc(50% - 20px)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
    <div style={{ marginBottom: '10px' }}>
      <label>
        Year:
        <select value={year} onChange={handleYearChange} style={{ marginLeft: '10px' }}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </label>
    </div>
    <Doughnut data={genderData} options={genderOptions} />
  </div>
  
  <div style={{ flex: '1 1 calc(50% - 20px)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
    <div style={{ marginBottom: '10px' }}>
      <label>
        Year:
        <select value={year} onChange={handleYearChange} style={{ marginLeft: '10px' }}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </label>
    </div>
    <Doughnut data={ageData} options={ageOptions} />
  </div>
</div>

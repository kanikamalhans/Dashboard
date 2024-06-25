<div style={{ 
  display: 'grid', 
  gridTemplateColumns: '1fr 1fr', 
  gridTemplateRows: '1fr 1fr', 
  gap: '20px', 
  maxWidth: '100vw', 
  maxHeight: '100vh', 
  padding: '20px', 
  boxSizing: 'border-box' 
}}>
  {popupInfo && <Popup data={popupInfo} onClose={closePopup} />}
  
  <div style={{ 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    padding: '20px', 
    borderRadius: '8px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    overflow: 'hidden' 
  }}>
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
    <div style={{ width: '100%', height: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  </div>
  
  <div style={{ 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    padding: '20px', 
    borderRadius: '8px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    overflow: 'hidden' 
  }}>
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
    <div style={{ width: '100%', height: '100%' }}>
      <Bar data={data2} options={options2} />
    </div>
  </div>
  
  <div style={{ 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    padding: '20px', 
    borderRadius: '8px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    overflow: 'hidden' 
  }}>
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
    <div style={{ width: '100%', height: '100%' }}>
      <Doughnut data={genderData} options={genderOptions} />
    </div>
  </div>
  
  <div style={{ 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    padding: '20px', 
    borderRadius: '8px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    overflow: 'hidden' 
  }}>
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
    <div style={{ width: '100%', height: '100%' }}>
      <Doughnut data={ageData} options={ageOptions} />
    </div>
  </div>
</div>

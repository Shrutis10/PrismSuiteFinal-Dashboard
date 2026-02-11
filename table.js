const tables = {

  health: `
  <table class="table table-hover align-middle">
    <thead class="table-light">
      <tr>
        <th>System</th>
        <th>CPU</th>
        <th>Memory</th>
        <th>Disk</th>
        <th>Health %</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Server-01</td><td>62%</td><td>71%</td><td>68%</td><td class="text-success">92%</td></tr>
      <tr><td>Server-02</td><td>78%</td><td>80%</td><td>75%</td><td class="text-warning">85%</td></tr>
      <tr><td>Server-03</td><td>90%</td><td>88%</td><td>82%</td><td class="text-danger">70%</td></tr>
    </tbody>
  </table> `,

  performance: `
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Node</th>
        <th>Latency (ms)</th>
        <th>Throughput</th>
        <th>HA Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Node-1</td><td>120</td><td>High</td><td>A</td></tr>
      <tr><td>Node-2</td><td>190</td><td>Medium</td><td>B</td></tr>
      <tr><td>Node-3</td><td>260</td><td>Low</td><td>C</td></tr>
    </tbody>
  </table> `,

  security: `
  <table class="table table-bordered">
    <thead class="table-light">
      <tr>
        <th>Control</th>
        <th>Status</th>
        <th>Severity</th>
        <th>Last Checked</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Firewall Rules</td><td class="text-success">Pass</td><td>Low</td><td>Today</td></tr>
      <tr><td>IAM Policies</td><td class="text-warning">Warning</td><td>Medium</td><td>Yesterday</td></tr>
      <tr><td>Patch Level</td><td class="text-danger">Fail</td><td>High</td><td>2 days ago</td></tr>
    </tbody>
  </table>`,

  config: `
  <table class="table">
    <thead>
      <tr>
        <th>Configuration</th>
        <th>Expected</th>
        <th>Actual</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>NTP Sync</td><td>Enabled</td><td>Enabled</td><td class="text-success">Compliant</td></tr>
      <tr><td>SSH Root Login</td><td>Disabled</td><td>Enabled</td><td class="text-danger">Non-Compliant</td></tr>
    </tbody>
  </table>`,

  gap: `
  <table class="table table-hover">
    <thead class="table-light">
      <tr>
        <th>Area</th>
        <th>Gap Identified</th>
        <th>Recommendation</th>
        <th>Priority</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Network</td><td>Missing Segmentation</td><td>Implement VLANs</td><td>High</td></tr>
      <tr><td>IAM</td><td>Excess Privileges</td><td>Apply RBAC</td><td>Medium</td></tr>
    </tbody>
  </table>`
};

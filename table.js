const tables = {

  health: `
<table class="table table-hover align-middle">
  <thead class="table-light">
    <tr>
      <th>Sr No.</th>
      <th>Device</th>
      <th>Assessment</th>
      <th>Percentage</th>
    </tr>
  </thead>
  <tbody>
    <!-- Data Server -->
    <tr>
      <td rowspan="4">1</td>
      <td rowspan="4">Data Server</td>
      <td>Operating System Definition (Windows Server 2019 Standard)</td>
      <td rowspan="4" class="text-warning">48%</td>
    </tr>
    <tr>
      <td>Operating System Version (Version 1809)</td>
    </tr>
    <tr>
      <td>Firmware Update</td>
    </tr>
    <tr>
      <td>Age Of the Server (5 Years Old)</td>
    </tr>

    <!-- SAP Server -->
    <tr>
      <td rowspan="4">2</td>
      <td rowspan="4">SAP Server</td>
      <td>Operating System Definition (SUSE Linux Enterprise Server 15)</td>
      <td rowspan="4" class="text-success">69%</td>
    </tr>
    <tr>
      <td>Operating System Version (15-SP4)</td>
    </tr>
    <tr>
      <td>Firmware Update</td>
    </tr>
    <tr>
      <td>Age Of the Server (6 Years Old)</td>
    </tr>

    <!-- Firewall -->
    <tr>
      <td rowspan="4">3</td>
      <td rowspan="4">Firewall</td>
      <td>Model No./Age (Sonicwall TZ 370)</td>
      <td rowspan="4" class="text-warning">62%</td>
    </tr>
    <tr>
      <td>Firmware Update (Sonic OS 7.1.2-7019)</td>
    </tr>
    <tr>
      <td>Features of Firewall</td>
    </tr>
    <tr>
      <td>Security Services</td>
    </tr>

    <!-- NAS -->
    <tr>
      <td rowspan="3">4</td>
      <td rowspan="3">NAS</td>
      <td>Age Factor</td>
      <td rowspan="3">N/A</td>
    </tr>
    <tr>
      <td>Snapshot Enabled</td>
    </tr>
    <tr>
      <td>Antivirus Enabled</td>
    </tr>

    <!-- Switches -->
    <tr>
      <td rowspan="2">5</td>
      <td rowspan="2">Switches</td>
      <td>Age Factor</td>
      <td rowspan="2" class="text-warning">49%</td>
    </tr>
    <tr>
      <td>Firmware Update</td>
    </tr>

    <!-- Access Point -->
    <tr>
      <td rowspan="4">6</td>
      <td rowspan="4">Access Point</td>
      <td>Age Factor</td>
      <td rowspan="4" class="text-warning">55%</td>
    </tr>
    <tr>
      <td>Tech 2.4 GHz / 5 GHz</td>
    </tr>
    <tr>
      <td>Antenna Count</td>
    </tr>
    <tr>
      <td>Range</td>
    </tr>

    <!-- EndPoints -->
    <tr>
      <td rowspan="2">7</td>
      <td rowspan="2">EndPoints</td>
      <td>Average Software Version Score</td>
      <td rowspan="2" class="text-danger">36.06%</td>
    </tr>
    <tr>
      <td>OS Versions</td>
    </tr>
  </tbody>
</table>
 `,

  performance: 
  `<table class="table table-hover align-middle">
  <thead class="table-light">
    <tr>
      <th>Device</th>
      <th>Score</th>
      <th>Grade & Percentage</th>
    </tr>
  </thead>
  <tbody>
    <!-- Data Server -->
    <tr>
      <td rowspan="4">Data Server</td>
      <td>Sum of Redundancy (Raid Level, RPS, RAM Slots, Processor Count, Additional Domain Controller)</td>
      <td>Performance (68% / B Grade) – Moderate, Needs Optimization</td>
    </tr>
    <tr>
      <td>Operating System Lifespan</td>
      <td>High Availability (61% / C+ Grade) – Basic Resilience, Not Enterprise HA</td>
    </tr>
    <tr>
      <td>Operating System Level HA</td>
      <td></td>
    </tr>
    <tr>
      <td>Network Teaming</td>
      <td></td>
    </tr>

    <!-- SAP Server -->
    <tr>
      <td rowspan="4">SAP Server</td>
      <td>Sum of Redundancy (Raid Level, RPS, RAM Slots, Processor Count, Additional Domain Controller)</td>
      <td>Performance (75% / B+ Grade) – Good, Optimization</td>
    </tr>
    <tr>
      <td>Operating System Lifespan</td>
      <td>High Availability (58% / C+ Grade) – Basic Hardware Resilience Only</td>
    </tr>
    <tr>
      <td>Operating System Level HA</td>
      <td></td>
    </tr>
    <tr>
      <td>Network Teaming</td>
      <td></td>
    </tr>

    <!-- Firewall -->
    <tr>
      <td rowspan="3">Firewall</td>
      <td>Firmware & Ageing</td>
      <td>Performance (75% / Grade: B+) – Good for Current Load</td>
    </tr>
    <tr>
      <td>2nd Firewall HA</td>
      
    </tr>
    <tr>
      <td>ISP HA</td>
      <td>High Availability (58% / C Grade) – Single Point of Failure Present</td>
    </tr>

    <!-- QNAP -->
    <tr>
      <td rowspan="3">QNAP</td>
      <td>Mock Data Recoverable Drill (Sample Data)</td>
      <td rowspan="3">N/A</td>
    </tr>
    <tr>
      <td>Out of the Office Backup</td>
    </tr>
    <tr>
      <td>One Touch Backup Technology</td>
    </tr>

    <!-- Switches -->
    <tr>
      <td>Switches</td>
      <td>Managed / Unmanaged</td>
      <td>(65% / Grade: C+) – Operational but Not Optimized</td>
    </tr>

    <!-- Router -->
    <tr>
      <td rowspan="2">Router</td>
      <td>Age</td>
      <td rowspan="2">(56% / Grade: C) – Near End AP Cycle & Single Point of Failure</td>
    </tr>
    <tr>
      <td>Antenna, Frequency</td>
    </tr>
  </tbody>
</table>

 `,

  security: `
  <table class="table table-hover align-middle">
  <thead class="table-light">
    <tr>
      <th>Device</th>
      <th>Assessment</th>
      <th>Percentage</th>
    </tr>
  </thead>
  <tbody>
    <!-- Current Security Software Levels -->
    <tr>
      <td rowspan="2">Current Security Software Levels</td>
      <td>Protected / Unprotected</td>
      <td rowspan="2" class="text-warning">59%</td>
    </tr>
    <tr>
      <td>Updated Status</td>
    </tr>

    <!-- Firewall -->
    <tr>
      <td rowspan="9">Firewall</td>
      <td>Ports Status</td>
      <td rowspan="9" class="text-warning">60%</td>
    </tr>
    <tr><td>EPS Levels</td></tr>
    <tr><td>Policies to be Verified</td></tr>
    <tr><td>Firmware Update</td></tr>
    <tr><td>Gateway Services</td></tr>
    <tr><td>DDOS</td></tr>
    <tr><td>IDS / IPS</td></tr>
    <tr><td>Web Filter Policies</td></tr>
    <tr><td>App Filter Policies (WAN to LAN / Vice Versa)</td></tr>

    <!-- QNAP -->
    <tr>
      <td rowspan="3">QNAP</td>
      <td>Firmware Updates</td>
      <td rowspan="3">N/A</td>
    </tr>
    <tr><td>Gateway Level AV Enablement</td></tr>
    <tr><td>Snapshot Frequency</td></tr>

    <!-- Endpoints -->
    <tr>
      <td rowspan="4">Endpoints</td>
      <td>Belarc Security Benchmark Score</td>
      <td rowspan="4" class="text-danger">39%</td>
    </tr>
    <tr><td>OS Update</td></tr>
    <tr><td>EPS Present with EDR</td></tr>
    <tr><td>OS Definition Update</td></tr>
  </tbody>
</table>
`,

  config: `
  <table class="table table-hover align-middle">
  <thead class="table-light">
    <tr>
      <th>Device</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <!-- Data Server -->
    <tr>
      <td rowspan="5">Data Server</td>
      <td>Expand D: drive capacity to maintain ≥25% free space threshold</td>
    </tr>
    <tr><td>Apply latest cumulative Windows updates and enable automated patching</td></tr>
    <tr><td>Deploy enterprise EDR and enforce real-time protection policies</td></tr>
    <tr><td>Restructure Active Directory OU/GPO design for stronger policy enforcement</td></tr>
    <tr><td>Minimize administrative privileges and implement login auditing & monitoring</td></tr>

    <!-- SAP Server -->
    <tr>
      <td rowspan="5">SAP Server</td>
      <td>Implement SAP HANA System Replication for high availability</td>
    </tr>
    <tr><td>Replace public DNS with internal secured DNS infrastructure</td></tr>
    <tr><td>Harden SSH/VNC access and enforce key-based authentication only</td></tr>
    <tr><td>Apply latest SLES security patches and enable automated updates</td></tr>
    <tr><td>Configure dedicated RAID 1/10 for HANA log volume to improve write performance</td></tr>

    <!-- Firewall -->
    <tr>
      <td rowspan="4">Firewall</td>
      <td>Apply pending firmware updates and enable automatic security updates</td>
    </tr>
    <tr><td>Tune IDS/IPS and Web/App filtering policies beyond default baseline</td></tr>
    <tr><td>Configure High Availability (Active/Passive pair) to remove single point of failure</td></tr>
    <tr><td>Implement geo-IP filtering and stricter outbound traffic policies</td></tr>

    <!-- QNAP -->
    <tr>
      <td>QNAP</td>
      <td>N/A</td>
    </tr>

    <!-- Endpoints -->
    <tr>
      <td rowspan="3">Endpoints</td>
      <td>Replace multiple software which are End of Life</td>
    </tr>
    <tr><td>Install missing critical security updates</td></tr>
    <tr><td>Multiple devices require OS upgrades</td></tr>
  </tbody>
</table>
`,

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

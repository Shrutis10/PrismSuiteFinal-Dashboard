const tables = {
  health: `
<table class="table table-hover align-middle" style="border-collapse: collapse; width: 100%;">
  <thead class="table-light">
    <tr>
      <th style="border: 1px solid black; padding: 0.5rem;">Sr No.</th>
      <th style="border: 1px solid black; padding: 0.5rem;">Device</th>
      <th style="border: 1px solid black; padding: 0.5rem;">Assessment</th>
      <th style="border: 1px solid black; padding: 0.5rem;">Percentage</th>
    </tr>
  </thead>
  <tbody>
    <!-- Data Server -->
    <tr>
      <td rowspan="4" style="border: 1px solid black; padding: 0.5rem;">1</td>
      <td rowspan="4" style="border: 1px solid black; padding: 0.5rem;">Data Server</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Operating System Definition (Windows Server 2019 Standard)</td>
      <td rowspan="4" class="text-warning" style="border: 1px solid black; padding: 0.5rem; font-size: 2.8em; font-weight: bold; text-align: center;">48%</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Operating System Version (Version 1809)</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Firmware Update</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Age Of the Server (5 Years Old)</td>
    </tr>

    <!-- SAP Server -->
    <tr>
      <td rowspan="4" style="border: 1px solid black; padding: 0.5rem;">2</td>
      <td rowspan="4" style="border: 1px solid black; padding: 0.5rem;">SAP Server</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Operating System Definition (SUSE Linux Enterprise Server 15)</td>
      <td rowspan="4" class="text-success" style="border: 1px solid black; padding: 0.5rem; font-size: 2.8em; font-weight: bold; text-align: center;">69%</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Operating System Version (15-SP4)</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Firmware Update</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Age Of the Server (6 Years Old)</td>
    </tr>

    <!-- Firewall -->
    <tr>
      <td rowspan="4" style="border: 1px solid black; padding: 0.5rem;">3</td>
      <td rowspan="4" style="border: 1px solid black; padding: 0.5rem;">Firewall</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Model No./Age (Sonicwall TZ 370)</td>
      <td rowspan="4" class="text-warning" style="border: 1px solid black; padding: 0.5rem; font-size: 2.8em; font-weight: bold; text-align: center;">62%</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Firmware Update (Sonic OS 7.1.2-7019)</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Features of Firewall</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Security Services</td>
    </tr>

    <!-- NAS -->
    <tr>
      <td rowspan="3" style="border: 1px solid black; padding: 0.5rem;">4</td>
      <td rowspan="3" style="border: 1px solid black; padding: 0.5rem;">NAS</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Age Factor</td>
      <td rowspan="3" style="border: 1px solid black; padding: 0.5rem; font-size: 2.2em; font-weight: bold; text-align: center; color: #555;">N/A</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Snapshot Enabled</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Antivirus Enabled</td>
    </tr>

    <!-- Switches -->
    <tr>
      <td rowspan="2" style="border: 1px solid black; padding: 0.5rem;">5</td>
      <td rowspan="2" style="border: 1px solid black; padding: 0.5rem;">Switches</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Age Factor</td>
      <td rowspan="2" class="text-warning" style="border: 1px solid black; padding: 0.5rem; font-size: 2.8em; font-weight: bold; text-align: center;">49%</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Firmware Update</td>
    </tr>

    <!-- Access Point -->
    <tr>
      <td rowspan="4" style="border: 1px solid black; padding: 0.5rem;">6</td>
      <td rowspan="4" style="border: 1px solid black; padding: 0.5rem;">Access Point</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Age Factor</td>
      <td rowspan="4" class="text-warning" style="border: 1px solid black; padding: 0.5rem; font-size: 2.8em; font-weight: bold; text-align: center;">55%</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Tech 2.4 GHz / 5 GHz</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Antenna Count</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Range</td>
    </tr>

    <!-- EndPoints -->
    <tr>
      <td rowspan="2" style="border: 1px solid black; padding: 0.5rem;">7</td>
      <td rowspan="2" style="border: 1px solid black; padding: 0.5rem;">EndPoints</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Average Software Version Score</td>
      <td rowspan="2" class="text-danger" style="border: 1px solid black; padding: 0.5rem; font-size: 2.8em; font-weight: bold; text-align: center;">36.06%</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">OS Versions</td>
    </tr>
  </tbody>
</table>
`,

  performance: `
<table class="table table-hover align-middle" style="border-collapse: collapse; width: 100%;">
  <thead class="table-light">
    <tr>
      <th style="border: 1px solid black; padding: 0.5rem;">Device</th>
      <th style="border: 1px solid black; padding: 0.5rem;">Score</th>
      <th style="border: 1px solid black; padding: 0.5rem;">Grade & Percentage</th>
    </tr>
  </thead>
  <tbody>
    <!-- Data Server -->
    <tr>
      <td rowspan="4" style="border: 1px solid black; padding: 0.5rem;">Data Server</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Sum of Redundancy (Raid Level, RPS, RAM Slots, Processor Count, Additional Domain Controller)</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Performance (68% / B Grade) – Moderate, Needs Optimization</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Operating System Lifespan</td>
      <td style="border: 1px solid black; padding: 0.5rem;">High Availability (61% / C+ Grade) – Basic Resilience, Not Enterprise HA</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Operating System Level HA</td>
      <td style="border: 1px solid black; padding: 0.5rem;"></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Network Teaming</td>
      <td style="border: 1px solid black; padding: 0.5rem;"></td>
    </tr>

    <!-- SAP Server -->
    <tr>
      <td rowspan="4" style="border: 1px solid black; padding: 0.5rem;">SAP Server</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Sum of Redundancy (Raid Level, RPS, RAM Slots, Processor Count, Additional Domain Controller)</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Performance (75% / B+ Grade) – Good, Optimization</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Operating System Lifespan</td>
      <td style="border: 1px solid black; padding: 0.5rem;">High Availability (58% / C+ Grade) – Basic Hardware Resilience Only</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Operating System Level HA</td>
      <td style="border: 1px solid black; padding: 0.5rem;"></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Network Teaming</td>
      <td style="border: 1px solid black; padding: 0.5rem;"></td>
    </tr>

    <!-- Firewall -->
    <tr>
      <td rowspan="3" style="border: 1px solid black; padding: 0.5rem;">Firewall</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Firmware & Ageing</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Performance (75% / Grade: B+) – Good for Current Load</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">2nd Firewall HA</td>
      <td style="border: 1px solid black; padding: 0.5rem;"></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">ISP HA</td>
      <td style="border: 1px solid black; padding: 0.5rem;">High Availability (58% / C Grade) – Single Point of Failure Present</td>
    </tr>

    <!-- QNAP -->
    <tr>
      <td rowspan="3" style="border: 1px solid black; padding: 0.5rem;">QNAP</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Mock Data Recoverable Drill (Sample Data)</td>
      <td rowspan="3" style="border: 1px solid black; padding: 0.5rem; font-size: 2.2em; font-weight: bold; text-align: center; color: #555;">N/A</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Out of the Office Backup</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">One Touch Backup Technology</td>
    </tr>

    <!-- Switches -->
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Switches</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Managed / Unmanaged</td>
      <td style="border: 1px solid black; padding: 0.5rem;">(65% / Grade: C+) – Operational but Not Optimized</td>
    </tr>

    <!-- Router -->
    <tr>
      <td rowspan="2" style="border: 1px solid black; padding: 0.5rem;">Router</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Age</td>
      <td rowspan="2" style="border: 1px solid black; padding: 0.5rem;">(56% / Grade: C) – Near End AP Cycle & Single Point of Failure</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Antenna, Frequency</td>
    </tr>
  </tbody>
</table>
`,

  security: `
<table class="table table-hover align-middle" style="border-collapse: collapse; width: 100%;">
  <thead class="table-light">
    <tr>
      <th style="border: 1px solid black; padding: 0.5rem;">Device</th>
      <th style="border: 1px solid black; padding: 0.5rem;">Assessment</th>
      <th style="border: 1px solid black; padding: 0.5rem;">Percentage</th>
    </tr>
  </thead>
  <tbody>
    <!-- Current Security Software Levels -->
    <tr>
      <td rowspan="2" style="border: 1px solid black; padding: 0.5rem;">Current Security Software Levels</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Protected / Unprotected</td>
      <td rowspan="2" class="text-warning" style="border: 1px solid black; padding: 0.5rem; font-size: 2.8em; font-weight: bold; text-align: center;">59%</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Updated Status</td>
    </tr>

    <!-- Firewall -->
    <tr>
      <td rowspan="9" style="border: 1px solid black; padding: 0.5rem;">Firewall</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Ports Status</td>
      <td rowspan="9" class="text-warning" style="border: 1px solid black; padding: 0.5rem; font-size: 2.8em; font-weight: bold; text-align: center;">60%</td>
    </tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">EPS Levels</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Policies to be Verified</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Firmware Update</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Gateway Services</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">DDOS</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">IDS / IPS</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Web Filter Policies</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">App Filter Policies (WAN to LAN / Vice Versa)</td></tr>

    <!-- QNAP -->
    <tr>
      <td rowspan="3" style="border: 1px solid black; padding: 0.5rem;">QNAP</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Firmware Updates</td>
      <td rowspan="3" style="border: 1px solid black; padding: 0.5rem; font-size: 2.2em; font-weight: bold; text-align: center; color: #555;">N/A</td>
    </tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Gateway Level AV Enablement</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Snapshot Frequency</td></tr>

    <!-- Endpoints -->
    <tr>
      <td rowspan="4" style="border: 1px solid black; padding: 0.5rem;">Endpoints</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Belarc Security Benchmark Score</td>
      <td rowspan="4" class="text-danger" style="border: 1px solid black; padding: 0.5rem; font-size: 2.8em; font-weight: bold; text-align: center;">39%</td>
    </tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">OS Update</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">EPS Present with EDR</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">OS Definition Update</td></tr>
  </tbody>
</table>
`,

  config: `
<table class="table table-hover align-middle" style="border-collapse: collapse; width: 100%;">
  <thead class="table-light">
    <tr>
      <th style="border: 1px solid black; padding: 0.5rem;">Device</th>
      <th style="border: 1px solid black; padding: 0.5rem;">Details</th>
    </tr>
  </thead>
  <tbody>
    <!-- Data Server -->
    <tr>
      <td rowspan="5" style="border: 1px solid black; padding: 0.5rem;">Data Server</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Expand D: drive capacity to maintain ≥25% free space threshold</td>
    </tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Apply latest cumulative Windows updates and enable automated patching</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Deploy enterprise EDR and enforce real-time protection policies</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Restructure Active Directory OU/GPO design for stronger policy enforcement</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Minimize administrative privileges and implement login auditing & monitoring</td></tr>

    <!-- SAP Server -->
    <tr>
      <td rowspan="5" style="border: 1px solid black; padding: 0.5rem;">SAP Server</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Implement SAP HANA System Replication for high availability</td>
    </tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Replace public DNS with internal secured DNS infrastructure</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Harden SSH/VNC access and enforce key-based authentication only</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Apply latest SLES security patches and enable automated updates</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Configure dedicated RAID 1/10 for HANA log volume to improve write performance</td></tr>

    <!-- Firewall -->
    <tr>
      <td rowspan="4" style="border: 1px solid black; padding: 0.5rem;">Firewall</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Apply pending firmware updates and enable automatic security updates</td>
    </tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Tune IDS/IPS and Web/App filtering policies beyond default baseline</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Configure High Availability (Active/Passive pair) to remove single point of failure</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Implement geo-IP filtering and stricter outbound traffic policies</td></tr>

    <!-- QNAP -->
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">QNAP</td>
      <td style="border: 1px solid black; padding: 0.5rem; font-size: 2.2em; font-weight: bold; text-align: center; color: #555;">N/A</td>
    </tr>

    <!-- Endpoints -->
    <tr>
      <td rowspan="3" style="border: 1px solid black; padding: 0.5rem;">Endpoints</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Replace multiple software which are End of Life</td>
    </tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Install missing critical security updates</td></tr>
    <tr><td style="border: 1px solid black; padding: 0.5rem;">Multiple devices require OS upgrades</td></tr>
  </tbody>
</table>
`,

  gap: `
<table class="table table-hover" style="border-collapse: collapse; width: 100%;">
  <thead class="table-light">
    <tr>
      <th style="border: 1px solid black; padding: 0.5rem;">Area</th>
      <th style="border: 1px solid black; padding: 0.5rem;">Gap Identified</th>
      <th style="border: 1px solid black; padding: 0.5rem;">Recommendation</th>
      <th style="border: 1px solid black; padding: 0.5rem;">Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">Network</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Missing Segmentation</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Implement VLANs</td>
      <td style="border: 1px solid black; padding: 0.5rem;">High</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 0.5rem;">IAM</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Excess Privileges</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Apply RBAC</td>
      <td style="border: 1px solid black; padding: 0.5rem;">Medium</td>
    </tr>
  </tbody>
</table>
`
};
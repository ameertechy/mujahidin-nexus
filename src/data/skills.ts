import { Server, Cloud, Shield, Code, Activity, Database } from "lucide-react";

export const skillCategories = [
  {
    category: "Systems & Infrastructure",
    icon: Server,
    skills: [
      "Windows Server",
      "Linux Administration",
      "Active Directory",
      "DNS/DHCP",
      "Group Policy",
      "IIS",
      "ITIL Practices",
      "ITSM"
    ]
  },
  {
    category: "Cloud & Virtualization",
    icon: Cloud,
    skills: [
      "Microsoft Azure",
      "VMware ESXi",
      "Hyper-V",
      "Microsoft 365",
      "Google Workspace",
      "Azure AD"
    ]
  },
  {
    category: "Networking & Security",
    icon: Shield,
    skills: [
      "FortiGate Firewalls",
      "VLAN Configuration",
      "ACL Management",
      "VPN Setup",
      "L2/L3 Switching",
      "Network Hardening",
      "Kaspersky EDR",
      "Agile Controller"
    ]
  },
  {
    category: "Automation & Scripting",
    icon: Code,
    skills: [
      "Python",
      "PowerShell",
      "Bash Scripting",
      "Git/GitHub",
      "Process Automation"
    ]
  },
  {
    category: "Monitoring & DevOps",
    icon: Activity,
    skills: [
      "PRTG Network Monitor",
      "Zabbix",
      "Docker",
      "Grafana",
      "CI/CD Pipelines",
      "Kubernetes (Learning)",
      "Terraform (Learning)",
      "Ansible (Learning)"
    ]
  },
  {
    category: "Backup & Storage",
    icon: Database,
    skills: [
      "Veeam Backup & Replication",
      "RClone",
      "Huawei OceanStor",
      "QNAP NAS",
      "SAN Management",
      "MPIO Configuration",
      "Disaster Recovery"
    ]
  }
];

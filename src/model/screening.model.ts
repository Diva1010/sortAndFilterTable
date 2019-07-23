
export class ResponseModel{
    count: Number;
    next?: String;
    previous?: String;
    results: Screening[];
    constructor(response:any){
        this.count = response.count;
        this.next = response.next;
        this.previous = response.previous;
        this.results = [];
        response.results.forEach(ele=>{
            this.results.push(new Screening(ele));
        });        
    }
}

export class Screening{
    id: String;
    name: String;
    url: String;
    companyBlacklist: String;
    countryBlacklist: String;
    portBlacklist: String;
    shipBlacklist: String;
    created: Date;
    modified: Date;
    companyCheckPriorMonths: Number;
    companyCheckPriorMonthSeverity: String;
    companyCheckSeverity: String;
    companyCheckSeverityTechnicalManager?: String;
    companyCheckSeverityTechnicalManagerSDN?: String;
    companyCheckSeverityTechnicalManagerGeneric?: String;
    companyCheckSeverityGroupBeneficialOwner?: String;
    companyCheckSeverityGroupBeneficialOwnerSDN?: String;
    companyCheckSeverityGroupBeneficialOwnerGeneric?: String;
    companyCheckSeverityShipManager?: String;
    companyCheckSeverityShipManagerSDN?: String;
    companyCheckSeverityShipManagerGeneric?: String;
    companyCheckSeverityOperator?: String;
    companyCheckSeverityOperatorSDN?: String;
    companyCheckSeverityOperatorGeneric?: String;
    companyCheckSeverityRegisteredOwner?: String;
    companyCheckSeverityRegisteredOwnerSDN?: String;
    companyCheckSeverityRegisteredOwnerGeneric?: String;
    countryCheckSeverity: String;
    countryCheckUnknownSeverity: String;
    shipSanctionCheckSeverity: String;
    shipSanctionCheckSeveritySDN: String;
    shipSanctionCheckSeverityGeneric: String;
    shipSanctionPrioMonths: Number;
    shipSanctionPrioMonthsSeverity: String;
    portVisitSeverity: String;
    noAISPositionSeverity: String;
    zoneSeverity: String;
    shipInspectionDetained: String;
    shipInspectionDeficiency: String;

    constructor(screeningResponse: any){
        this.id = screeningResponse.id;
        this.name = screeningResponse.name;
        this.url = screeningResponse.url;
        this.companyBlacklist = screeningResponse.country_blacklists;
        this.portBlacklist = screeningResponse.port_blacklists;
        this.companyBlacklist = screeningResponse.country_blacklists;
        this.shipBlacklist = screeningResponse.ship_blacklists;
        this.created = screeningResponse.created;
        this.modified = screeningResponse.modified;
        this.companyCheckPriorMonths = screeningResponse.company_check_prior_months;
        this.companyCheckPriorMonthSeverity = screeningResponse.company_check_prior_months_severity;
        this.companyCheckSeverity = screeningResponse.company_check_severity;
        this.companyCheckSeverityTechnicalManager = screeningResponse.company_check_severity_technical_manager;
        this.companyCheckSeverityTechnicalManagerSDN = screeningResponse.company_check_severity_technical_manager_sdn;
        this.companyCheckSeverityTechnicalManagerGeneric = screeningResponse.company_check_severity_technical_manager_generic;
        this.companyCheckSeverityGroupBeneficialOwner = screeningResponse.company_check_severity_group_beneficial_owner;
        this.companyCheckSeverityGroupBeneficialOwnerSDN = screeningResponse.company_check_severity_group_beneficial_owner_sdn;
        this.companyCheckSeverityGroupBeneficialOwnerGeneric = screeningResponse.company_check_severity_group_beneficial_owner_generic;
        this.companyCheckSeverityShipManager = screeningResponse.company_check_severity_ship_manager;
        this.companyCheckSeverityShipManagerSDN = screeningResponse.company_check_severity_ship_manager_sdn;
        this.companyCheckSeverityShipManagerGeneric = screeningResponse.company_check_severity_ship_manager_generic;
        this.companyCheckSeverityOperator = screeningResponse.company_check_severity_operator;
        this.companyCheckSeverityOperatorSDN = screeningResponse.company_check_severity_operator_sdn;
        this.companyCheckSeverityOperatorGeneric = screeningResponse.company_check_severity_operator_generic;
        this.companyCheckSeverityRegisteredOwner = screeningResponse.company_check_severity_registered_owner;
        this.companyCheckSeverityRegisteredOwnerSDN = screeningResponse.company_check_severity_registered_owner_sdn;
        this.companyCheckSeverityRegisteredOwnerGeneric = screeningResponse.company_check_severity_registered_owner_generic;
        this.countryCheckSeverity = screeningResponse.country_check_severity;
        this.countryCheckUnknownSeverity = screeningResponse.country_check_unknown_severity;
        this.shipSanctionCheckSeverity = screeningResponse.ship_sanction_check_severity;
        this.shipSanctionCheckSeveritySDN = screeningResponse.ship_sanction_check_severity_sdn;
        this.shipSanctionCheckSeverityGeneric = screeningResponse.ship_sanction_check_severity_generic;
        this.shipSanctionPrioMonths = screeningResponse.ship_sanction_prior_months;
        this.shipSanctionPrioMonthsSeverity = screeningResponse.ship_sanction_prior_months_severity;
        this.portVisitSeverity = screeningResponse.port_visit_severity;
        this.noAISPositionSeverity = screeningResponse.no_ais_position_severity;
        this.zoneSeverity = screeningResponse.zone_severity;
        this.shipInspectionDetained = screeningResponse.ship_inspection_detained;
        this.shipInspectionDeficiency = screeningResponse.ship_inspection_deficiency;
    }
}
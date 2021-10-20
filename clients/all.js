require('../lib/node_loader');
module.exports = {
  ACM: require('./acm'),
  APIGateway: require('./apigateway'),
  ApplicationAutoScaling: require('./applicationautoscaling'),
  AppStream: require('./appstream'),
  AutoScaling: require('./autoscaling'),
  Batch: require('./batch'),
  Budgets: require('./budgets'),
  CloudDirectory: require('./clouddirectory'),
  CloudFormation: require('./cloudformation'),
  CloudFront: require('./cloudfront'),
  CloudHSM: require('./cloudhsm'),
  CloudSearch: require('./cloudsearch'),
  CloudSearchDomain: require('./cloudsearchdomain'),
  CloudTrail: require('./cloudtrail'),
  CloudWatch: require('./cloudwatch'),
  CloudWatchEvents: require('./cloudwatchevents'),
  CloudWatchLogs: require('./cloudwatchlogs'),
  CodeBuild: require('./codebuild'),
  CodeCommit: require('./codecommit'),
  CodeDeploy: require('./codedeploy'),
  CodePipeline: require('./codepipeline'),
  CognitoIdentity: require('./cognitoidentity'),
  CognitoIdentityServiceProvider: require('./cognitoidentityserviceprovider'),
  CognitoSync: require('./cognitosync'),
  ConfigService: require('./configservice'),
  CUR: require('./cur'),
  DataPipeline: require('./datapipeline'),
  DeviceFarm: require('./devicefarm'),
  DirectConnect: require('./directconnect'),
  DirectoryService: require('./directoryservice'),
  Discovery: require('./discovery'),
  DMS: require('./dms'),
  DynamoDB: require('./dynamodb'),
  DynamoDBStreams: require('./dynamodbstreams'),
  EC2: require('./ec2'),
  ECR: require('./ecr'),
  ECS: require('./ecs'),
  EFS: require('./efs'),
  ElastiCache: require('./elasticache'),
  ElasticBeanstalk: require('./elasticbeanstalk'),
  ELB: require('./elb'),
  ELBv2: require('./elbv2'),
  EMR: require('./emr'),
  ES: require('./es'),
  ElasticTranscoder: require('./elastictranscoder'),
  Firehose: require('./firehose'),
  GameLift: require('./gamelift'),
  Glacier: require('./glacier'),
  Health: require('./health'),
  IAM: require('./iam'),
  ImportExport: require('./importexport'),
  Inspector: require('./inspector'),
  Iot: require('./iot'),
  IotData: require('./iotdata'),
  Kinesis: require('./kinesis'),
  KinesisAnalytics: require('./kinesisanalytics'),
  KMS: require('./kms'),
  Lambda: require('./lambda'),
  LexRuntime: require('./lexruntime'),
  Lightsail: require('./lightsail'),
  MachineLearning: require('./machinelearning'),
  MarketplaceCommerceAnalytics: require('./marketplacecommerceanalytics'),
  MarketplaceMetering: require('./marketplacemetering'),
  MTurk: require('./mturk'),
  MobileAnalytics: require('./mobileanalytics'),
  OpsWorks: require('./opsworks'),
  OpsWorksCM: require('./opsworkscm'),
  Organizations: require('./organizations'),
  Pinpoint: require('./pinpoint'),
  Polly: require('./polly'),
  RDS: require('./rds'),
  Redshift: require('./redshift'),
  Rekognition: require('./rekognition'),
  ResourceGroupsTaggingAPI: require('./resourcegroupstaggingapi'),
  Route53: require('./route53'),
  Route53Domains: require('./route53domains'),
  S3: require('./s3'),
  S3Control: require('./s3control'),
  ServiceCatalog: require('./servicecatalog'),
  SES: require('./ses'),
  Shield: require('./shield'),
  SimpleDB: require('./simpledb'),
  SMS: require('./sms'),
  Snowball: require('./snowball'),
  SNS: require('./sns'),
  SQS: require('./sqs'),
  SSM: require('./ssm'),
  StorageGateway: require('./storagegateway'),
  StepFunctions: require('./stepfunctions'),
  STS: require('./sts'),
  Support: require('./support'),
  SWF: require('./swf'),
  XRay: require('./xray'),
  WAF: require('./waf'),
  WAFRegional: require('./wafregional'),
  WorkDocs: require('./workdocs'),
  WorkSpaces: require('./workspaces'),
  CodeStar: require('./codestar'),
  LexModelBuildingService: require('./lexmodelbuildingservice'),
  MarketplaceEntitlementService: require('./marketplaceentitlementservice'),
  Athena: require('./athena'),
  Greengrass: require('./greengrass'),
  DAX: require('./dax'),
  MigrationHub: require('./migrationhub'),
  CloudHSMV2: require('./cloudhsmv2'),
  Glue: require('./glue'),
  Mobile: require('./mobile'),
  Pricing: require('./pricing'),
  CostExplorer: require('./costexplorer'),
  MediaConvert: require('./mediaconvert'),
  MediaLive: require('./medialive'),
  MediaPackage: require('./mediapackage'),
  MediaStore: require('./mediastore'),
  MediaStoreData: require('./mediastoredata'),
  AppSync: require('./appsync'),
  GuardDuty: require('./guardduty'),
  MQ: require('./mq'),
  Comprehend: require('./comprehend'),
  IoTJobsDataPlane: require('./iotjobsdataplane'),
  KinesisVideoArchivedMedia: require('./kinesisvideoarchivedmedia'),
  KinesisVideoMedia: require('./kinesisvideomedia'),
  KinesisVideo: require('./kinesisvideo'),
  SageMakerRuntime: require('./sagemakerruntime'),
  SageMaker: require('./sagemaker'),
  Translate: require('./translate'),
  ResourceGroups: require('./resourcegroups'),
  AlexaForBusiness: require('./alexaforbusiness'),
  Cloud9: require('./cloud9'),
  ServerlessApplicationRepository: require('./serverlessapplicationrepository'),
  ServiceDiscovery: require('./servicediscovery'),
  WorkMail: require('./workmail'),
  AutoScalingPlans: require('./autoscalingplans'),
  TranscribeService: require('./transcribeservice'),
  Connect: require('./connect'),
  ACMPCA: require('./acmpca'),
  FMS: require('./fms'),
  SecretsManager: require('./secretsmanager'),
  IoTAnalytics: require('./iotanalytics'),
  IoT1ClickDevicesService: require('./iot1clickdevicesservice'),
  IoT1ClickProjects: require('./iot1clickprojects'),
  PI: require('./pi'),
  Neptune: require('./neptune'),
  MediaTailor: require('./mediatailor'),
  EKS: require('./eks'),
  Macie: require('./macie'),
  DLM: require('./dlm'),
  Signer: require('./signer'),
  Chime: require('./chime'),
  PinpointEmail: require('./pinpointemail'),
  RAM: require('./ram'),
  Route53Resolver: require('./route53resolver'),
  PinpointSMSVoice: require('./pinpointsmsvoice'),
  QuickSight: require('./quicksight'),
  RDSDataService: require('./rdsdataservice'),
  Amplify: require('./amplify'),
  DataSync: require('./datasync'),
  RoboMaker: require('./robomaker'),
  Transfer: require('./transfer'),
  GlobalAccelerator: require('./globalaccelerator'),
  ComprehendMedical: require('./comprehendmedical'),
  KinesisAnalyticsV2: require('./kinesisanalyticsv2'),
  MediaConnect: require('./mediaconnect'),
  FSx: require('./fsx'),
  SecurityHub: require('./securityhub'),
  AppMesh: require('./appmesh'),
  LicenseManager: require('./licensemanager'),
  Kafka: require('./kafka'),
  ApiGatewayManagementApi: require('./apigatewaymanagementapi'),
  ApiGatewayV2: require('./apigatewayv2'),
  DocDB: require('./docdb'),
  Backup: require('./backup'),
  WorkLink: require('./worklink'),
  Textract: require('./textract'),
  ManagedBlockchain: require('./managedblockchain'),
  MediaPackageVod: require('./mediapackagevod'),
  GroundStation: require('./groundstation'),
  IoTThingsGraph: require('./iotthingsgraph'),
  IoTEvents: require('./iotevents'),
  IoTEventsData: require('./ioteventsdata'),
  Personalize: require('./personalize'),
  PersonalizeEvents: require('./personalizeevents'),
  PersonalizeRuntime: require('./personalizeruntime'),
  ApplicationInsights: require('./applicationinsights'),
  ServiceQuotas: require('./servicequotas'),
  EC2InstanceConnect: require('./ec2instanceconnect'),
  EventBridge: require('./eventbridge'),
  LakeFormation: require('./lakeformation'),
  ForecastService: require('./forecastservice'),
  ForecastQueryService: require('./forecastqueryservice'),
  QLDB: require('./qldb'),
  QLDBSession: require('./qldbsession'),
  WorkMailMessageFlow: require('./workmailmessageflow'),
  CodeStarNotifications: require('./codestarnotifications'),
  SavingsPlans: require('./savingsplans'),
  SSO: require('./sso'),
  SSOOIDC: require('./ssooidc'),
  MarketplaceCatalog: require('./marketplacecatalog'),
  DataExchange: require('./dataexchange'),
  SESV2: require('./sesv2'),
  MigrationHubConfig: require('./migrationhubconfig'),
  ConnectParticipant: require('./connectparticipant'),
  AppConfig: require('./appconfig'),
  IoTSecureTunneling: require('./iotsecuretunneling'),
  WAFV2: require('./wafv2'),
  ElasticInference: require('./elasticinference'),
  Imagebuilder: require('./imagebuilder'),
  Schemas: require('./schemas'),
  AccessAnalyzer: require('./accessanalyzer'),
  CodeGuruReviewer: require('./codegurureviewer'),
  CodeGuruProfiler: require('./codeguruprofiler'),
  ComputeOptimizer: require('./computeoptimizer'),
  FraudDetector: require('./frauddetector'),
  Kendra: require('./kendra'),
  NetworkManager: require('./networkmanager'),
  Outposts: require('./outposts'),
  AugmentedAIRuntime: require('./augmentedairuntime'),
  EBS: require('./ebs'),
  KinesisVideoSignalingChannels: require('./kinesisvideosignalingchannels'),
  Detective: require('./detective'),
  CodeStarconnections: require('./codestarconnections'),
  Synthetics: require('./synthetics'),
  IoTSiteWise: require('./iotsitewise'),
  Macie2: require('./macie2'),
  CodeArtifact: require('./codeartifact'),
  Honeycode: require('./honeycode'),
  IVS: require('./ivs'),
  Braket: require('./braket'),
  IdentityStore: require('./identitystore'),
  Appflow: require('./appflow'),
  RedshiftData: require('./redshiftdata'),
  SSOAdmin: require('./ssoadmin'),
  TimestreamQuery: require('./timestreamquery'),
  TimestreamWrite: require('./timestreamwrite'),
  S3Outposts: require('./s3outposts'),
  DataBrew: require('./databrew'),
  ServiceCatalogAppRegistry: require('./servicecatalogappregistry'),
  NetworkFirewall: require('./networkfirewall'),
  MWAA: require('./mwaa'),
  AmplifyBackend: require('./amplifybackend'),
  AppIntegrations: require('./appintegrations'),
  ConnectContactLens: require('./connectcontactlens'),
  DevOpsGuru: require('./devopsguru'),
  ECRPUBLIC: require('./ecrpublic'),
  LookoutVision: require('./lookoutvision'),
  SageMakerFeatureStoreRuntime: require('./sagemakerfeaturestoreruntime'),
  CustomerProfiles: require('./customerprofiles'),
  AuditManager: require('./auditmanager'),
  EMRcontainers: require('./emrcontainers'),
  HealthLake: require('./healthlake'),
  SagemakerEdge: require('./sagemakeredge'),
  Amp: require('./amp'),
  GreengrassV2: require('./greengrassv2'),
  IotDeviceAdvisor: require('./iotdeviceadvisor'),
  IoTFleetHub: require('./iotfleethub'),
  IoTWireless: require('./iotwireless'),
  Location: require('./location'),
  WellArchitected: require('./wellarchitected'),
  LexModelsV2: require('./lexmodelsv2'),
  LexRuntimeV2: require('./lexruntimev2'),
  Fis: require('./fis'),
  LookoutMetrics: require('./lookoutmetrics'),
  Mgn: require('./mgn'),
  LookoutEquipment: require('./lookoutequipment'),
  Nimble: require('./nimble'),
  Finspace: require('./finspace'),
  Finspacedata: require('./finspacedata'),
  SSMContacts: require('./ssmcontacts'),
  SSMIncidents: require('./ssmincidents'),
  ApplicationCostProfiler: require('./applicationcostprofiler'),
  AppRunner: require('./apprunner'),
  Proton: require('./proton'),
  Route53RecoveryCluster: require('./route53recoverycluster'),
  Route53RecoveryControlConfig: require('./route53recoverycontrolconfig'),
  Route53RecoveryReadiness: require('./route53recoveryreadiness'),
  ChimeSDKIdentity: require('./chimesdkidentity'),
  ChimeSDKMessaging: require('./chimesdkmessaging'),
  SnowDeviceManagement: require('./snowdevicemanagement'),
  MemoryDB: require('./memorydb'),
  OpenSearch: require('./opensearch'),
  KafkaConnect: require('./kafkaconnect'),
  VoiceID: require('./voiceid'),
  Wisdom: require('./wisdom'),
  Account: require('./account'),
  CloudControl: require('./cloudcontrol'),
  Grafana: require('./grafana'),
  Panorama: require('./panorama')
};
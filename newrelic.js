#
# This file configures the New Relic Agent.  New Relic monitors Ruby, Java,
# .NET, PHP, Python, Node, and Go applications with deep visibility and low
# overhead.  For more information, visit www.newrelic.com.

# Generated <%= Time.now.strftime('%B %d, %Y') %><%= ", for version #{@agent_version}" if @agent_version %>
#<%= "\n# #{generated_for_user}\n#" if generated_for_user %>
# For full documentation of agent configuration options, please refer to
# https://docs.newrelic.com/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration

common: &default_settings
  # Required license key associated with your New Relic account.
  license_key: ENV['NR_KEY']

  # Your application name. Renaming here affects where data displays in New
  # Relic. For more details, see https://docs.newrelic.com/docs/apm/new-relic-apm/maintenance/renaming-applications
  app_name: 'Ruby without Heroku add-on'

  # To disable the agent regardless of other settings, uncomment the following:
  # agent_enabled: false

  # Logging level for log/newrelic_agent.log; options are error, warn, info, or
  # debug.
  log_level: info

  # All of the following configuration options are optional. Review them, and
  # uncomment or edit them if they appear relevant to your application needs.

  # An array of ActiveSupport custom events names to subscribe to and provide
  # instrumentation for. For example,
  #   - my.custom.event
  #   - another.event
  #   - a.third.event
  # active_support_custom_events_names: ""cd

  # If `true`, all logging-related features for the agent can be enabled or disabled
  # independently. If `false`, all logging-related features are disabled.
  # application_logging.enabled: true

  # If `true`, the agent captures log records emitted by this application.
  # application_logging.forwarding.enabled: true

  # Sets the minimum level a log event must have to be forwarded to New Relic.
  # This is based on the integer values of Ruby's `Logger::Severity` constants: https://github.com/ruby/ruby/blob/master/lib/logger/severity.rb
  # The intention is to forward logs with the level given to the configuration, as well as any logs with a higher level of severity.
  # For example, setting this value to "debug" will forward all log events to New Relic. Setting this value to "error" will only forward log events with the levels "error", "fatal", and "unknown".
  # Valid values (ordered lowest to highest):
  #   * "debug"
  #   * "info"
  #   * "warn"
  #   * "error"
  #   * "fatal"
  #   * "unknown"
  # application_logging.forwarding.log_level: debug

  # Defines the maximum number of log records to buffer in memory at a time.
  # application_logging.forwarding.max_samples_stored: 10000

  # If `true`, the agent captures metrics related to logging for this application.
  # application_logging.metrics.enabled: true

  # If `true`, the agent decorates logs with metadata to link to entities, hosts, traces, and spans.
  # application_logging.local_decorating.enabled: false

  # If `true`, the agent will report source code level metrics for traced methods
  # see: https://docs.newrelic.com/docs/apm/agents/ruby-agent/features/ruby-codestream-integration/
  # code_level_metrics.enabled: true

  # If true, enables transaction event sampling.
  # transaction_events.enabled: true

  # Defines the maximum number of request events reported from a single harvest.
  # transaction_events.max_samples_stored: 1200

  # Prefix of attributes to exclude from all destinations. Allows * as wildcard at
  # end.
  # attributes_exclude: []

  # Prefix of attributes to include in all destinations. Allows * as wildcard at
  # end.
  # attributes_include: []

  # If true, enables capture of attributes for all destinations.
  # attributes.enabled: true

  # If true, enables an audit log which logs communications with the New Relic
  # collector.
  # audit_log.enabled: false

  # List of allowed endpoints to include in audit log.
  # audit_log.endpoints: [".*"]

  # Specifies a path to the audit log file (including the filename).
  # audit_log.path: "/audit_log"

  # Specify a list of constants that should prevent the agent from starting
  # automatically. Separate individual constants with a comma ,.
  # For example, Rails::Console,UninstrumentedBackgroundJob.
  # autostart.denylisted_constants: "rails::console"

  # Defines a comma-delimited list of executables that the agent should not
  # instrument. For example, rake,my_ruby_script.rb.
  # autostart.denylisted_executables: "irb,rspec"

  # Defines a comma-delimited list of Rake tasks that the agent should not
  # instrument. For example, assets:precompile,db:migrate.
  # autostart.denylisted_rake_tasks: "about,assets:clean,assets:clobber,assets:environment,assets:precompile,assets:precompile:all,db:create,db:drop,db:fixtures:load,db:migrate,db:migrate:status,db:rollback,db:schema:cache:clear,db:schema:cache:dump,db:schema:dump,db:schema:load,db:seed,db:setup,db:structure:dump,db:version,doc:app,log:clear,middleware,notes,notes:custom,rails:template,rails:update,routes,secret,spec,spec:features,spec:requests,spec:controllers,spec:helpers,spec:models,spec:views,spec:routing,spec:rcov,stats,test,test:all,test:all:db,test:recent,test:single,test:uncommitted,time:zones:all,tmp:clear,tmp:create,webpacker:compile"

  # Backports the faster Active Record connection lookup introduced in Rails 6,
  # which improves agent performance when instrumenting Active Record. Note that
  # this setting may not be compatible with other gems that patch Active Record.
  # backport_fast_active_record_connection_lookup: false

  # If true, the agent captures attributes from browser monitoring.
  # browser_monitoring.attributes.enabled: false

  # Prefix of attributes to exclude from browser monitoring. Allows * as wildcard
  # at end.
  # browser_monitoring.attributes.exclude: []

  # Prefix of attributes to include in browser monitoring. Allows * as wildcard at
  # end.
  # browser_monitoring.attributes.include: []

  # This is true by default, this enables auto-injection of the JavaScript header
  # for page load timing (sometimes referred to as real user monitoring or RUM).
  # browser_monitoring.auto_instrument: true

  # Manual override for the path to your local CA bundle. This CA bundle will be
  # used to validate the SSL certificate presented by New Relic's data collection
  # service.
  # ca_bundle_path: nil

  # Enable or disable the capture of memcache keys from transaction traces.
  # capture_memcache_keys: false

  # When true, the agent captures HTTP request parameters and attaches them to
  # transaction traces, traced errors, and TransactionError events. When using the
  # capture_params setting, the Ruby agent will not attempt to filter secret
  # information. Recommendation: To filter secret information from request
  # parameters,use the attributes.include setting instead. For more information,
  # see the Ruby attribute examples.
  # capture_params: false

  # If true, the agent will clear Tracer::State in Agent.drop_buffered_data.
  # clear_transaction_state_after_fork: false

  # Path to newrelic.yml. If undefined, the agent checks the following directories
  # (in order): config/newrelic.yml, newrelic.yml, $HOME/.newrelic/newrelic.yml
  # and $HOME/newrelic.yml.
  # config_path: newrelic.yml

  # If true, enables cross application tracing. Cross application tracing is now
  # deprecated, and disabled by default. Distributed tracing is replacing cross
  # application tracing as the default means of tracing between services.
  # To continue using it, set `cross_application_tracer.enabled: true` and
  # `distributed_tracing.enabled: false`
  # cross_application_tracer.enabled: false

  # If false, custom attributes will not be sent on New Relic Insights events.
  # custom_attributes.enabled: true

  # If true, the agent captures New Relic Insights custom events.
  # custom_insights_events.enabled: true

  # Specify a maximum number of custom Insights events to buffer in memory at a
  # time.
  # custom_insights_events.max_samples_stored: 3000

  # If false, the agent will not add database_name parameter to transaction or #
  # slow sql traces.
  # datastore_tracer.database_name_reporting.enabled: true

  # If false, the agent will not report datastore instance metrics, nor add host
  # or  port_path_or_id parameters to transaction or slow SQL traces.
  # datastore_tracer.instance_reporting.enabled: true

  # If true, disables Action Cable instrumentation.
  # disable_action_cable_instrumentation: false

  # If true, disables Action Mailbox instrumentation.
  # disable_action_mailbox: false

  # If true, disables Action Mailer instrumentation.
  # disable_action_mailer: false

  # If true, disables instrumentation for Active Record 4+
  # disable_active_record_notifications: false

  # If true, disables Active Storage instrumentation.
  # disable_active_storage: false

  # If true, disables Active Support instrumentation.
  # disable_active_support: false

  # If true, disables Active Job instrumentation.
  # disable_activejob: false

  # If true, disables Active Record instrumentation.
  # disable_active_record_instrumentation: false

  # If true, the agent won't sample the CPU usage of the host process.
  # disable_cpu_sampler: false

  # If true, disables ActiveSupport custom events instrumentation.
  # disable_custom_events_instrumentation: false

  # If true, the agent won't measure the depth of Delayed Job queues.
  # disable_delayed_job_sampler: false

  # If true, disables the use of GC::Profiler to measure time spent in garbage
  # collection
  # disable_gc_profiler: false

  # If true, the agent won't sample the memory usage of the host process.
  # disable_memory_sampler: false

  # If true, the agent won't wrap third-party middlewares in instrumentation
  # (regardless of whether they are installed via Rack::Builder or Rails).
  # disable_middleware_instrumentation: false

  # If true, disables the collection of sampler metrics. Sampler metrics are
  # metrics that are not event-based (such as CPU time or memory usage).
  # disable_samplers: false

  # If true, disables Sequel instrumentation.
  # disable_sequel_instrumentation: false

  # If true, disables Sidekiq instrumentation.
  # disable_sidekiq: false

  # If true, disables agent middleware for Sinatra. This middleware is responsible
  # for advanced feature support such as distributed tracing, page load
  # timing, and error collection.
  # disable_sinatra_auto_middleware: false

  # If true, disables view instrumentation.
  # disable_view_instrumentation: false

  # If true, the agent won't sample performance measurements from the Ruby VM.
  # disable_vm_sampler: false

  # Distributed tracing tracks and observes service requests as they flow through distributed systems.
  # With distributed tracing data, you can quickly pinpoint failures or performance issues and fix them.
  # distributed_tracing.enabled: true

  # If true, the agent captures attributes from error collection.
  # error_collector.attributes.enabled: false

  # Prefix of attributes to exclude from error collection.
  # Allows * as wildcard at end.
  # error_collector.attributes.exclude: []

  # Prefix of attributes to include in error collection.
  # Allows * as wildcard at end.
  # error_collector.attributes.include: []

  # If true, the agent collects TransactionError events.
  # error_collector.capture_events: true

  # If true, the agent captures traced errors and error count metrics.
  # error_collector.enabled: true

  # A list of error classes that the agent should treat as expected.
  # error_collector.expected_classes: []

  # A map of error classes to a list of messages. When an error of one of the
  # classes specified here occurs, if its error message contains one of the
  # strings corresponding to it here, that error will be treated as expected.
  # error_collector.expected_messages: {}

  # A comma separated list of status codes, possibly including ranges. Errors
  # associated with these status codes, where applicable, will be treated as
  # expected.
  # error_collector.expected_status_codes: ""

  # A list of error classes that the agent should ignore.
  # error_collector.ignore_classes: []

  # A map of error classes to a list of messages. When an error of one of the
  # classes specified here occurs, if its error message contains one of the
  # strings corresponding to it here, that error will be ignored.
  # error_collector.ignore_messages: ""

  # A comma separated list of status codes, possibly including ranges. Errors
  # associated with these status codes, where applicable, will be ignored.
  # error_collector.ignore_status_codes: ""

  # Defines the maximum number of frames in an error backtrace. Backtraces over
  # this amount are truncated at the beginning and end.
  # error_collector.max_backtrace_frames: 50

  # Defines the maximum number of TransactionError events sent to Insights per
  # harvest cycle.
  # error_collector.max_event_samples_stored: 100

  # Allows newrelic distributed tracing headers to be suppressed on outbound
  # requests.
  # exclude_newrelic_header: false

  # Forces the exit handler that sends all cached data to collector before
  # shutting down to be installed regardless of detecting scenarios where it
  # generally should not be. Known use-case for this option is where Sinatra is
  # running as an embedded service within another framework and the agent is
  # detecting the Sinatra app and skipping the at_exit handler as a result.
  # Sinatra classically runs the entire application in an at_exit block and would
  # otherwise misbehave if the Agent's at_exit handler was also installed in
  # those circumstances. Note: send_data_on_exit should also be set to true in
  # tandem with this setting.
  # force_install_exit_handler: false

  # Ordinarily the agent reports dyno names with a trailing dot and process ID
  # (for example, worker.3). You can remove this trailing data by specifying the
  # prefixes you want to report without trailing data (for example, worker).
  # heroku.dyno_name_prefixes_to_shorten: ["scheduler", "run"]

  # If true, the agent uses Heroku dyno names as the hostname.
  # heroku.use_dyno_names: true

  # If true, enables high security mode. Ensure that you understand the
  # implication of enabling high security mode before enabling this setting.
  # https://docs.newrelic.com/docs/agents/manage-apm-agents/configuration/high-security-mode/
  # high_security: false

  # Configures the hostname for the Trace Observer Host. When configured, enables
  # tail-based sampling by sending all recorded spans to a Trace Observer for
  # further sampling decisions, irrespective of any usual agent sampling decision.
  # infinite_tracing.trace_observer.host: ""

  # Configures the TCP/IP port for the Trace Observer Host
  # infinite_tracing.trace_observer.port: 443

  # Configure the compression level for data sent to the Trace Observer
  # May be one of [none|low|medium|high]
  # 'high' is the default. Set the level to 'none' to disable compression
  # infinite_tracing.compression_level: high

  # If true (the default), data sent to the Trace Observer will be batched
  # instead of each span being sent individually
  # infinite_tracing.batching: true

  # Controls auto-instrumentation of bunny at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.bunny: auto

  # Controls auto-instrumentation of Fiber at start up.
  # May be one of [auto|prepend|chain|disabled]
  # instrumentation.fiber: auto

  # Controls auto-instrumentation of concurrent_ruby at start up.
  # May be one of [auto|prepend|chain|disabled]
  # instrumentation.concurrent_ruby: auto

  # Controls auto-instrumentation of Curb at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.curb: auto

  # Controls auto-instrumentation of Delayed Job at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.delayed_job: auto

  # Controls auto-instrumentation of the elasticsearch library at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.elasticsearch: auto

  # Controls auto-instrumentation of Excon at start up.
  # May be one of [enabled|disabled].
  # instrumentation.excon: enabled

  # Controls auto-instrumentation of Grape at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.grape: auto

  # Controls auto-instrumentation of HTTPClient at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.httpclient: auto

  # Controls auto-instrumentation of http.rb gem at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.httprb: auto

  # Controls auto-instrumentation of the Ruby standard library Logger.rb.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.logger: auto

  # Controls auto-instrumentation of ActiveSupport::Logger at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.active_support.logger: auto

  # Controls auto-instrumentation of memcache-client gem for Memcache at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.memcache_client: auto

  # Controls auto-instrumentation of dalli gem for Memcache at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.memcache: auto

  # Controls auto-instrumentation of memcached gem for Memcache at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.memcached: auto

  # Controls auto-instrumentation of Mongo at start up.
  # May be one of [enabled|disabled].
  # instrumentation.mongo: enabled

  # Controls auto-instrumentation of Net::HTTP at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.net_http: auto

  # Controls auto-instrumentation of Puma::Rack::URLMap at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.puma_rack_urlmap: auto

  # Controls auto-instrumentation of Puma::Rack. When enabled, the agent hooks
  # into the to_app method in Puma::Rack::Builder to find gems to instrument
  # during application startup. May be one of [auto|prepend|chain|disabled].
  # instrumentation.puma_rack: auto

  # Controls auto-instrumentation of Rack::URLMap at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.rack_urlmap: auto

  # Controls auto-instrumentation of Rack. When enabled, the agent hooks into the
  # to_app method in Rack::Builder to find gems to instrument during application
  # startup. May be one of [auto|prepend|chain|disabled].
  # instrumentation.rack: auto

  # Controls auto-instrumentation of rake at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.rake: auto

  # Controls auto-instrumentation of Redis at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.redis: auto

  # Controls auto-instrumentation of resque at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.resque: auto

  # Controls auto-instrumentation of Sinatra at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.sinatra: auto

  # Controls auto-instrumentation of Tilt at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.tilt: auto

  # Controls auto-instrumentation of Typhoeus at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.typhoeus: auto

  # Controls auto-instrumentation of the Thread class at start up to allow the agent to correctly nest spans inside of an asynchronous transaction.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.thread: auto

  # Controls auto-instrumentation of the Thread class at start up to automatically add tracing to all Threads created in the application.
  # instrumentation.thread.tracing: true

  # Controls auto-instrumentation of gRPC clients at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.grpc_client: auto

  # Controls auto-instrumentation of gRPC servers at start up.
  # May be one of [auto|prepend|chain|disabled].
  # instrumentation.grpc_server: auto

  # Specifies a list of hostname patterns separated by commas that will match
  # gRPC hostnames that traffic is to be ignored by New Relic for.
  # New Relic's gRPC client instrumentation will ignore traffic streamed to a
  # host matching any of these patterns, and New Relic's gRPC server
  # instrumentation will ignore traffic for a server running on a host whose
  # hostname matches any of these patterns. By default, no traffic is ignored
  # when gRPC instrumentation is itself enabled.
  # For example, "private.com$,exception.*"
  # instrumentation.grpc.host_denylist: ""

  # A dictionary of label names and values that will be applied to the data sent
  # from this agent. May also be expressed as a semicolon-delimited ; string of
  # colon-separated : pairs.
  # For example,<var>Server</var>:<var>One</var>;<var>Data Center</var>:<var>Primary</var>.
  # labels: ""

  # Defines a name for the log file.
  # log_file_name: "newrelic_agent.log"

  # Defines a path to the agent log file, excluding the filename.
  # log_file_path: "log/"

  # Specifies a marshaller for transmitting data to the New Relic collector.
  # Currently json is the only valid value for this setting.
  # marshaller: json

  # If true, the agent will collect metadata about messages and attach them as
  # segment parameters.
  # message_tracer.segment_parameters.enabled: true

  # If true, the agent captures Mongo queries in transaction traces.
  # mongo.capture_queries: true

  # If true, the agent obfuscates Mongo queries in transaction traces.
  # mongo.obfuscate_queries: true

  # If true, the agent captures Elasticsearch queries in transaction traces.
  # elasticsearch.capture_queries: true

  # If true, the agent obfuscates Elasticsearch queries in transaction traces.
  # elasticsearch.obfuscate_queries: true

  # When true, the agent transmits data about your app to the New Relic collector.
  # monitor_mode: true

  # If true, uses Module#prepend rather than alias_method for Active Record
  # instrumentation.
  # prepend_active_record_instrumentation: false

  # Specify a custom host name for display in the New Relic UI
  # Be be aware that you cannot rename a hostname, so please rename
  # process_host.display_name: "default hostname"

  # Defines a host for communicating with the New Relic collector via a proxy
  # server.
  # proxy_host: nil

  # Defines a password for communicating with the New Relic collector via a proxy
  # server.
  # proxy_pass: nil

  # Defines a port for communicating with the New Relic collector via a proxy
  # server.
  # proxy_port: nil

  # Defines a user for communicating with the New Relic collector via a proxy
  # server.
  # proxy_user: nil

  # Timeout for waiting on connect to complete before a rake task
  # rake.connect_timeout: 10

  # Specify an array of Rake tasks to automatically instrument.
  # This configuration option converts the Array to a RegEx list.
  # If you'd like to allow all tasks by default, use `rake.tasks: [.+]`.
  # Rake tasks will not be instrumented unless they're added to this list.
  # For more information, visit the (New Relic Rake Instrumentation docs)[/docs/apm/agents/ruby-agent/background-jobs/rake-instrumentation].
  # rake.tasks: []

  # Define transactions you want the agent to ignore, by specifying a list of
  # patterns matching the URI you want to ignore.
  # rules.ignore_url_regexes: []

  # Applies Language Agent Security Policy settings.
  # security_policies_token: ""

  # If true, enables the exit handler that sends data to the New Relic collector
  # before shutting down.
  # send_data_on_exit: true

  # If true, the agent collects slow SQL queries.
  # slow_sql.enabled: false

  # If true, the agent collects explain plans in slow SQL queries. If this setting
  # is omitted, the transaction_tracer.explain_enabled setting will be applied as
  # the default setting for explain plans in slow SQL as well.
  # slow_sql.explain_enabled: false

  # Specify a threshold in seconds. The agent collects slow SQL queries and
  # explain plans that exceed this threshold.
  # slow_sql.explain_threshold: 1.0

  # Defines an obfuscation level for slow SQL queries.
  # Valid options are obfuscated, raw, or none.
  # slow_sql.record_sql: none

  # Generate a longer sql_id for slow SQL traces. sql_id is used for aggregation
  # of similar queries.
  # slow_sql.use_longer_sql_id: false

  # If true, the agent captures attributes on span events.
  # span_events_attributes.enabled: true

  # Defines the maximum number of span events reported from a single harvest.
  # This can be any integer between 1 and 10000. Increasing this value may impact
  # memory usage.
  # span_events.max_samples_stored: 2000

  # Prefix of attributes to exclude from span events. Allows * as wildcard at end.
  # span_events.attributes.exclude: []

  # Prefix of attributes to include on span events. Allows * as wildcard at end.
  # span_events.attributes.include: []

  # If true, enables span event sampling.
  # span_events.enabled: true

  # Sets the maximum number of span events to buffer when streaming to the trace
  # observer.
  # span_events.queue_size: 10000

  # Specify a list of exceptions you do not want the agent to strip when
  # strip_exception_messages is true. Separate exceptions with a comma. For
  # example, "ImportantException,PreserveMessageException".
  # strip_exception_messages.allowed_classes: ""

  # If true, the agent strips messages from all exceptions except those in the
  # allowlist. Enabled automatically in high security mode.
  # strip_exception_messages.enabled: true

  # When set to true, forces a synchronous connection to the New Relic collector
  # during application startup. For very short-lived processes, this helps ensure # the New Relic agent has time to report.
  # sync_startup: false

  # If true, enables use of the thread profiler.
  # thread_profiler.enabled: false

  # Defines the maximum number of seconds the agent should spend attempting to
  # connect to the collector.
  # timeout: 120

  # If true, the agent captures attributes from transaction events.
  # transaction_events_attributes.enabled: false

  # Prefix of attributes to exclude from transaction events.
  # Allows * as wildcard at end.
  # transaction_events.attributes.exclude: []

  # Prefix of attributes to include in transaction events.
  # Allows * as wildcard at end.
  # transaction_events.attributes.include: []

  # If true, the agent captures attributes on transaction segments.
  # transaction_segments_attributes.enabled: true

  # Prefix of attributes to exclude from transaction segments.
  # Allows * as wildcard at end.
  # transaction_segments.attributes.exclude: []

  # Prefix of attributes to include on transaction segments.
  # Allows * as wildcard at end.
  # transaction_segments.attributes.include: []

  # If true, the agent captures attributes from transaction traces.
  # transaction_tracer.attributes.enabled: false

  # Prefix of attributes to exclude from transaction traces.
  # Allows * as wildcard at end.
  # transaction_tracer.attributes.exclude: []

  # Prefix of attributes to include in transaction traces.
  # Allows * as wildcard at end.
  # transaction_tracer.attributes.include: []

  # If true, enables collection of transaction traces.
  # transaction_tracer.enabled: true

  # Threshold (in seconds) above which the agent will collect explain plans.
  # Relevant only when explain_enabled is true.
  # transaction_tracer.explain_threshold: 0.5

  # If true, enables the collection of explain plans in transaction traces.
  # This setting will also apply to explain plans in slow SQL traces if
  # slow_sql.explain enabled is not set separately.
  # transaction_tracer.explain_enabled:  true

  # Maximum number of transaction trace nodes to record in a single transaction
  # trace.
  # transaction_tracer.limit_segments: 4000

  # If true, the agent records Redis command arguments in transaction traces.
  # transaction_tracer.record_redis_arguments: false

  # Obfuscation level for SQL queries reported in transaction trace nodes.
  # By default, this is set to obfuscated, which strips out the numeric and string
  # literals. If you do not want the agent to capture query information, set this
  # to 'none'. If you want the agent to capture all query information in its
  # original form, set this to 'raw'. When you enable high security mode this is
  # automatically set to 'obfuscated'
  # transaction_tracer.record_sql: 'obfuscated'

  # Specify a threshold in seconds. The agent includes stack traces in transaction
  # trace nodes when the stack trace duration exceeds this threshold.
  # transaction_tracer.stack_trace_threshold: 0.5

  # Specify a threshold in seconds. Transactions with a duration longer than this
  # threshold are eligible for transaction traces. Specify a float value or the
  # string apdex_f.
  # transaction_tracer.transaction_threshold: 1.0

  # If true, the agent automatically detects that it is running in an AWS
  # environment.
  # utilization.detect_aws: true

  # If true, the agent automatically detects that it is running in an Azure
  # environment.
  # utilization.detect_azure: true

  # If true, the agent automatically detects that it is running in Docker.
  # utilization.detect_docker: true

  # If true, the agent automatically detects that it is running in an Google Cloud
  # Platform environment.
  # utilization.detect_gcp: true

  # If true, the agent automatically detects that it is running in Kubernetes.
  # utilization.detect_kubernetes: true

  # If true, the agent automatically detects that it is running in a Pivotal Cloud Foundry environment.
  # utilization.detect_pcf: true

# Environment-specific settings are in this section.
# RAILS_ENV or RACK_ENV (as appropriate) is used to determine the environment.
# If your application has other named environments, configure them here.
development:
  <<: *default_settings
  app_name: <%= app_name %> (Development)

test:
  <<: *default_settings
  # It doesn't make sense to report to New Relic from automated test runs.
  monitor_mode: false

staging:
  <<: *default_settings
  app_name: <%= app_name %> (Staging)

production:
  <<: *default_settings
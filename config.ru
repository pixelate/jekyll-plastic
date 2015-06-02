require 'rack/jekyll'
require 'rack/www'

use Rack::WWW, :predicate => lambda { |env|
  Rack::Request.new(env).host == "example.com"
}

run Rack::Jekyll.new